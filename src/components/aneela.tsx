"use client";
import React, { FormEvent } from "react";
import { useState } from "react";
import { MdDelete } from "react-icons/md";
import { RxCrossCircled } from "react-icons/rx";

const AddItem = () => {
  // State to hold the languages and hobbies

  const [language, setLanguage] = useState<string[]>(["urdu", "English"]);
  const [hobby, setHobby] = useState<string[]>([
    "Reading  ",
    "Travelling",
    "photography",
    "cooking",
    "painting",
    "fitness",
    "chess",
  ]);

  //state for the input field
  const [newLanguage, setNewLanguage] = useState<string>("");
  const [newHobby, setNewHobby] = useState<string>("");

  // State for error messages
  const [languageError, setLanguageError] = useState<string>("");
  const [hobbyError, setHobbyError] = useState<string>("");

  const handleAddLanguage = (e:FormEvent) => {
    e.preventDefault();

    if (!newLanguage.trim()) {
      setLanguageError("Please enter a language.");
      return;
    }
    if (newLanguage) {
      setLanguage([...language, newLanguage]); // Add new language to list
      setNewLanguage(""); // Reset input
    }
  };

  const handleAddHobbies = (e:FormEvent) => {
    e.preventDefault();

    if (!newHobby.trim()) {
      setHobbyError("Please enter a hobby.");
      return;
    }

    if (setNewHobby) {
      setHobby([...hobby, newHobby]); // Add new language to list
      setNewHobby(""); // Reset input
    }
  };

  const handleDeleteLanguage = (indexToRemove:Number) => {
    setLanguage(language.filter((_, index) => index !== indexToRemove));
  };

  const handleDeleteHobby = (indexToRemove:Number) => {
    setHobby(hobby.filter((_, index) => index !== indexToRemove));
  };

  return (
    <main className=" bg-white  ">
      <div className="ml-16">
        <h1 className="font-bold pt-8 text-black">Languages</h1>
        <p className="text-gray-400 mt-2">
          List your most relevent Language on top{" "}
        </p>
        <ul className="mt-3 mb-3">
          {language.map((language, index) => (
            <div className="max-w-96 mb-3">
              <li
                key={index}
                className=" p-2 mr-2 flex items-center justify-between text-black"
              >
                {language}
                <button
                  className="ml-2 text-blue-500"
                  onClick={() => handleDeleteLanguage(index)}
                >
                  <MdDelete />
                </button>
              </li>
            </div>
          ))}
        </ul>

        {/* form to add new languages */}

        <form onSubmit={handleAddLanguage}>
          <input
            type="text"
            value={newLanguage}
            onChange={(e) => setNewLanguage(e.target.value)}
            placeholder="add new Language"
            className="border p-2 rounde text-black"
          />
          <button
            type="submit"
            className="bg-blue-500 text-white p-2 ml-2 rounded"
          >
            + Add Language
          </button>
          {languageError && (
            <p className="text-red-500 mt-1">{languageError}</p>
          )}
        </form>

        {/* hobby */}
        <h1 className="font-bold mt-8 text-black">Hobbies</h1>
        <p className="text-gray-400 mt-2">
          You can include your interest such as reading , listining to music
          ,travel , yoga or krate
        </p>
        <ul className="flex gap-8 mb-4 p-3">
          {hobby.map((hobby, index) => (
            <li
              key={index}
              className=" bg-blue-200 text-blue-800 py-1 px-2 rounded-xl flex justify-center items-center"
            >
              {hobby}

              <button
                onClick={() => handleDeleteHobby(index)}
                className=" ml-2"
              >
                <RxCrossCircled className="text-blue-800 text-md " />
              </button>
            </li>
          ))}
        </ul>
        {/* form to add hobbies */}
        <form onSubmit={handleAddHobbies}>
          <input
            type="text"
            value={newHobby}
            onChange={(e) => setNewHobby(e.target.value)}
            placeholder="add new Hobby"
            className="border p-2 mr-2 mb-3 rounded text-black"
          />
          <button
            type="submit"
            className="bg-blue-500 text-white p-2 mb-3 rounded"
          >
            + Add Hobby
          </button>
          {hobbyError && <p className="text-red-500 mt-2">{hobbyError}</p>}
        </form>
      </div>
    </main>
  );
};

export default AddItem;

