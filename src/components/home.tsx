import { Card, CardBody, Input, Textarea, Divider, Button } from "@nextui-org/react";
import Navbar from "@/components/navbar";
import React, { useState } from "react";

const Home: React.FC = () => {
    const [project, setProject] = useState<{ title: string; description: string; } | null>(null);
    const [title, setTitle] = useState<string>("");
    const [description, setDescription] = useState<string>("");
    const [darkMode, setDarkMode] = useState<boolean>(false);

    const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setProject({ title, description });
    };

    const bgClass = darkMode ? "bg-zinc-900" : "bg-zinc-50";
    const cardClass = darkMode ? "bg-zinc-700 border-zinc-500" : "bg-zinc-300 border-zinc-200";
    const inputBgClass = darkMode ? "bg-zinc-700 text-white" : "bg-zinc-200 text-black";
    const textareaBgClass = darkMode ? "bg-zinc-700 text-white" : "bg-gray-200 text-black";
    const titleClass = darkMode ? "text-gray-100" : "text-zinc-500";

    return (
        <main className={`min-h-screen w-screen ${bgClass} text-gray-900 dark:text-gray-100`}>
            <Navbar toggleDarkMode={() => setDarkMode(!darkMode)} darkMode={darkMode} />
            <form method="post" action="#" onSubmit={handleFormSubmit}>
                <div>
                    <label htmlFor="preference">Quelles sont vos préférences ?</label>
                    <input type="text" id="preference" value="preference"/>
                </div>
                <div>
                    <label htmlFor="temps">Combien de temps voulez-vous y consacrer ?</label>
                    <input type="text" id="temps" value="temps"/>
                </div>

                <input type="submit" value="Envoyer"/>
            </form>
        </main>
    );
};

export default Home;
