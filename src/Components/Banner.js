import React from 'react';

const Banner = () => {
    return (
        <div>
            <div class="hero min-h-10 bg-base-200 ">
                <div class="hero-content flex-col lg:flex-row-reverse">
                    <img src="https://i.ibb.co/RgRPvDB/5138237-removebg-preview.png" />
                    <div>
                        <h1 class="text-5xl font-bold text-yellow-600">Best Friend Squad </h1>
                        <p class="py-6 w-9/12">Friends are like the stars; they are always there, but you only see their true brightness at the darkest times.

                            If you open my heart, guess what you are gonna see? It’s you. True friends are hard to find so I kept you.
                            In life Friendship is like standing on wet cement. The longer you stay, the harder it’s to leave, and you can never go without leaving your footprints behind.</p>
                        <button class="btn btn text-white  bg-blue-500">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;