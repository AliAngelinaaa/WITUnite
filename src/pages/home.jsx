import React from 'react';
import wit from '../images/wit.jpeg';
import '../css/home.css';
import Affirmation from '../components/affirmation';


function Home() {


    return (
        <div>
            <Affirmation />
            <section class="whoweare" id="whoweare">
                <div class="content">
                    <div class="whoweare-details">
                        <div class="left">
                            <div class="topic">Who We Are</div>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt, porro veritatis pariatur, nobis voluptatem ipsum repellat nemo quisquam error reprehenderit recusandae odio vel, suscipit. Voluptas mollitia accusantium quaerat aspernatur labore dolorum placeat ipsa sint nam perspiciatis eos consectetur veritatis debitis, quis aliquam unde sed maiores sit! Hic molestiae optio iste
                                iure earum amet nostrum quaerat facere quae veniam maiores harum iusto aperiam vel inventore illo voluptatibus voluptates quo impedit voluptatum error vitae, omnis praesentium? Aperiam nulla non, nesciunt fuga rem perferendis alias et, temporibus, distinctio culpa unde a laborum libero ducimus. Facilis veniam sit praesentium, voluptatibus sint maxime iusto eaque.
                            </p>
                        </div>
                        <div class="right">
                            <img src={wit} alt="" />
                        </div>
                    </div>
                </div>
            </section>
            <section class="iam">
                <div class="iam-title">I am...</div>
                <div class="circle-container">
                    <div class="circle">Circle 1 Text</div>
                    <div class="circle">Circle 2 Text</div>
                    <div class="circle">Circle 3 Text</div>
                </div>
            </section>


            <section className="goal">
                <div className="Goal-title">Goal</div>
                <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                    labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                    laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                    voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                    non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
            </section>
            <section>Meet Members</section>
        </div>
    )
}

export default Home;