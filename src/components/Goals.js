import React from 'react';
import { FaBullseye, FaUtensils, FaListAlt } from 'react-icons/fa';
import { FaChevronRight } from 'react-icons/fa';

function Goals() {
    return (
        <ul className="goals-list">
            <li>
                <div className="icon-circle">
                    <FaBullseye className="icon" />
                </div>
                Goals
                <div className="arrow-circle">
                    <FaChevronRight className="arrow" />
                </div>
            </li>
            <li>
                <div className="icon-circle">
                    <FaUtensils className="icon" />
                </div>
                Popular Dishes
                <div className="arrow-circle">
                    <FaChevronRight className="arrow" />
                </div>
            </li>
            <li>
                <div className="icon-circle">
                    <FaListAlt className="icon" />
                </div>
                Menu
                <div className="arrow-circle">
                    <FaChevronRight className="arrow" />
                </div>
            </li>
        </ul>
    );
}

export default Goals;

