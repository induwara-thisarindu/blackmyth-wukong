import React, { useEffect, useState } from 'react';
import { db } from '../firebase-config.js';
import { collection, getDocs, addDoc, serverTimestamp, query, orderBy } from 'firebase/firestore';
import "../styles/Review.css";

const ReviewPage = () => {
    const [newName, setNewName] = useState("");
    const [newReview, setNewReview] = useState("");
    const [users, setUsers] = useState([]);

    const usersCollectionRef = collection(db, "users");

    const getUsers = async () => {
        const q = query(usersCollectionRef, orderBy("createdAt", "desc"));
        const data = await getDocs(q);
        setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    const createUser = async () => {
        if (!newName.trim() || !newReview.trim()) {
            alert("Please fill out both the name and review fields.");
            return;
        }

        await addDoc(usersCollectionRef, {
            name: newName,
            review: newReview,
            createdAt: serverTimestamp()
        });
        getUsers();
        setNewName("");
        setNewReview("");
    };

    useEffect(() => {
        getUsers();
    }, []);

    return (
        <section className="review-page">
            <h1>Reviews</h1>
            <div className="review_section">
                <div className="input_section">
                    <input
                        required
                        placeholder="Name"
                        value={newName}
                        onChange={(event) => setNewName(event.target.value)}
                    />
                    <textarea
                        required
                        className="review_input"
                        placeholder="Review"
                        value={newReview}
                        onChange={(event) => setNewReview(event.target.value)}
                    />

                    <button
                        className="review_btn_submit"
                        onClick={createUser}
                        disabled={!newName.trim() || !newReview.trim()}
                    >
                        Add a review
                    </button>
                </div>
                <div className="review_list">
                    {users.map((user) => (
                        <div key={user.id} className="reviews">
                            <h3>{user.name}</h3>
                            <p>{user.review}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ReviewPage;



