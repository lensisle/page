import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import './styles/index.css';
import t1 from "./img/1.svg";
import t2 from "./img/2.svg"; 

const App = () => (
    <div class="ml-10 mt-10 flex">
        <div class="mr-16">
            <div id="trophies" class="flex mb-10">
                <img class="h-8 mr-6" src={t1} alt="Trophy 1" aria-label="This is a black diamond trophy" />
                <img class="h-8 mr-6" src={t2} alt="Trophy 2" aria-label="This is a parenting moon trophy" />
            </div>
            <p><span class="font-semibold">Hello visitor</span>, I gift to you the ability to speak.</p>
            <p>Please enjoy my present, if you want.</p>
        </div>
        <div class="bg-gray-200 h-screen">
            <div class=" max-w-lg flex flex-col">
                <a href="#" class="block bg-black text-gray-200 inline-block px-5 py-3 rounded-sm text-sm uppercase tracking-wider font-semibold mb-6">
                    say something
                </a>
                <a href="#" class="block bg-black text-gray-200 inline-block px-5 py-3 rounded-sm text-sm uppercase tracking-wider font-semibold">
                    stay silent
                </a>
            </div>
            <div class="mt-4">
                <input type="text" placeholder="voice message" />
            </div>
        </div>
    </div>
);

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
