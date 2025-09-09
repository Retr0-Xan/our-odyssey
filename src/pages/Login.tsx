import React, { useState } from 'react';
import { motion } from 'framer-motion';

const USERNAME = 'odyssey';
const PASSWORD = 'babushka';

interface LoginProps {
    onLogin?: () => void;
}

const Login: React.FC<LoginProps> = ({ onLogin }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (username === USERNAME && password === PASSWORD) {
            setError('');
            if (onLogin) {
                setTimeout(() => {
                    onLogin();
                }, 600);
            }
        } else {
            setError('Invalid credentials.');
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="min-h-screen flex items-center justify-center relative overflow-hidden"
        >
            {/* Hero-style background */}
            <div className="absolute inset-0 luxury-gradient opacity-95"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <motion.form
                onSubmit={handleSubmit}
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="glass-morphism rounded-2xl shadow-2xl p-10 w-full max-w-md text-center border border-gray-700 backdrop-blur-lg bg-white/20 text-gray-100"
            >
                <h2 className="text-4xl font-bold mb-8 text-gray-100 tracking-tight border-b-2 border-gray-700 pb-2 shadow-lg drop-shadow-xl font-sans">
                    Login
                </h2>
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={e => setUsername(e.target.value)}
                    className="w-full mb-4 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-yellow-500 text-black"
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    className="w-full mb-4 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-yellow-500 text-black"
                />
                {error && <div className="text-red-500 mb-4">{error}</div>}
                <button
                    type="submit"
                    className="w-full py-2 bg-yellow-500 text-white font-semibold rounded hover:bg-yellow-600 transition-all"
                >
                    Log In
                </button>
            </motion.form>
        </motion.div>
    );
};

export default Login;
