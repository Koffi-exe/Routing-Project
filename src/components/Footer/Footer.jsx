import React from "react";

export default function Footer() {
  return (
    <div className="bg-black text-white p-5">
      {/* Footer Content Start */}
        <div className="bg-slate-600 flex justify-evenly border-2 border-slate-700  p-3">
        <div className="w-2/5">
          <h3 className="text-2xl font-bold">Footer Content</h3>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam
            distinctio cupiditate non excepturi, eaque ex obcaecati modi esse
            unde iste similique, velit dignissimos a magnam aspernatur nisi
            minima!
          </p>
        </div>
        <div>
          <h3 className="text-2xl font-bold">LINKS</h3>
          <ul>
            <li>List item</li>
            <li>List item</li>
            <li>List item</li>
            <li>List item</li>
            <li>List item</li>
          </ul>
        </div>
        <div>
          <h3 className="text-2xl font-bold">LINKS</h3>
          <ul>
            <li>List item</li>
            <li>List item</li>
            <li>List item</li>
            <li>List item</li>
            <li>List item</li>
          </ul>
        </div>
        <div>
          <h3 className="text-2xl font-bold">LINKS</h3>
          <ul>
            <li>List item</li>
            <li>List item</li>
            <li>List item</li>
            <li>List item</li>
            <li>List item</li>
          </ul>
        </div>
        </div>
      {/* Footer Content End */}
        <div className="bg-slate-800 border-x-2 border-b-2 border-slate-700  p-3 flex justify-center items-center">
            <label className="text-3xl mr-8">Register For Free</label>
            <button className="border-2 border-black rounded-3xl bg-orange-700 p-3 ">SIGN UP!</button>
        </div>
    </div>
  );
}
