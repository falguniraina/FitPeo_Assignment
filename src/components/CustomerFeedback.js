
import React from 'react';
import man1 from '../assets/images/man1.jpg';
import women1 from '../assets/images/women1.jpg';

const CustomerFeedback = () => {
    const feedbacks = [
        { id: 1, name: 'John Doe', rating: 4, comment: 'Great service!', date: '2024-08-01', img: man1 },
        { id: 2, name: 'Jane Smith', rating: 3, comment: 'Average experience.', date: '2024-08-02', img: women1 },
        { id: 3, name: 'Sam Johnson', rating: 5, comment: 'Outstanding!', date: '2024-08-03', img: man1 },
        { id: 4, name: 'Anna Brown', rating: 2, comment: 'Not satisfied.', date: '2024-08-04', img: women1 },
    ];

    return (
        <div className="customer-feedback">
            <h3>Customer Feedback</h3>
            <ul>
                {feedbacks.map((feedback) => (
                    <li key={feedback.id}>
                        <div className="feedback-header">
                            <img src={feedback.img} alt={feedback.name} />
                            <div>
                                <span className="name">{feedback.name}</span>
                                <div className="stars">{'★'.repeat(feedback.rating)}{'☆'.repeat(5 - feedback.rating)}</div>
                            </div>
                        </div>
                        <p>{feedback.comment}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default CustomerFeedback;

