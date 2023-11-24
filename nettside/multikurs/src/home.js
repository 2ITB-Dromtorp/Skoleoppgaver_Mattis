import React, { useContext, useState } from 'react';
import './App.css';
import logo from './images/profilepic.png';
import { useNavigate, Link } from 'react-router-dom';
import { UserContext } from "./context";
import { useRefreshUserData } from './custom_hooks';

function Square({ courseId, courseName, courseDesc, courseImage }) {
    const { 0: userData } = useContext(UserContext);
    const refreshData = useRefreshUserData();
    let actionText;
    let apiPath;
    let addClass;
    if (userData.logged_in && userData.courses.includes(courseId)) {
        actionText = 'Meld deg av';
        apiPath = 'leavecourse';
        addClass = ' delete';
    } else {
        actionText = 'Meld deg på';
        apiPath = 'joincourse';
        addClass = '';
    }
    return (
        <div className='square'>
            <img className='course_image' src={courseImage} />
            <h3 className='course_name'>{courseName}</h3>
            <p className='course_desc'>{courseDesc}</p>
            <div className='course_bottom'>
                <Link to={`/course/${courseId}`} className='view_course_button fancy_button'>
                    Se kurs
                </Link>
                {
                    userData.logged_in ? (
                        <button className={'course_link fancy_button' + addClass} onClick={(e) => {
                            fetch(`/api/${apiPath}`, {
                                method: 'POST',
                                headers: {
                                    'Content-Type': 'application/json',
                                },
                                body: JSON.stringify({
                                    course: courseId,
                                }),
                            }).then((res) => {
                                if (res.status === 200) {
                                    refreshData();
                                }
                            });
                        }}>
                            {actionText}
                        </button>
                    ) : (
                        <div className='course_not_logged_in'>
                            Logg inn for å melde deg på
                        </div>
                    )
                }
            </div>
        </div>
    );
}

//https://i.insider.com/649efcf46e35e9001af91d77?width=1136&format=jpeg

function Home() {
    let navigate = useNavigate();
    return (
        <div id="home_container">
            <h1>Opplæring av godt voksne</h1>
            <div className="square-container">
                <Square courseId="norsk" courseName="Norsk" courseDesc="Dette kurset dreier seg mest om norsk og vil gå grundig igjennom norsk faget, blant annet dikt analyser osv." courseImage='https://st4.depositphotos.com/16647696/24841/i/450/depositphotos_248417272-stock-photo-books-on-the-background-of.jpg' />
                <Square courseId="heimkunnskap" courseName="Heimkunnskap" courseDesc="Dette kurset handler om Heimkunnskap og vil fortelle deg hvordan du kan bli bedre til å lage mat i hverdagen." courseImage='https://www.njff.no/mat/jegergryte/_/image/e3cda4dc-1536-4d05-a80c-77da069c0770:33973c5a07bccdbfbeaee7caa1fde6f32b8fb98c/block-1024-768/jegergryte.jpg/' />
                <Square courseId="datakunnskap" courseName="Datakunnskap" courseDesc="Dette kurset handler om Grunneleggene Datakunnskap og vil fortelle deg hvordan du kan bli flinkere på data og lære de tryggeste metodene." courseImage='https://www.fotovideoweb.no/stage/wp-content/uploads/2015/10/autumn-desktop.jpg' />
                <Square courseId="kroppsoving" courseName="Kroppsøving" courseDesc="Dette kurset handler om Kroppsøving og hvordan du kan bli bedre trent eller ha bedre kosthold osv." courseImage='https://www.hussle.com/blog/wp-content/uploads/2020/12/Gym-structure-1080x675.png' />
            </div>
        </div>
    );
}

export default Home;