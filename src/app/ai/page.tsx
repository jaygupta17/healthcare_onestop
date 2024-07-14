// pages/index.tsx
"use client"
import { useState, ChangeEvent, FormEvent } from 'react';
import Head from 'next/head';

export default function Home() {
  const [image, setImage] = useState<File | null>(null);
  const [prompt, setPrompt] = useState<string>('');
  const [result, setResult] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handlePromptChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setPrompt(e.target.value);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!image || !prompt) {
      alert('Please select an image and enter a prompt');
      return;
    }
  
    setIsLoading(true);
    const formData = new FormData();
    formData.append('image', image);
    formData.append('prompt', prompt);
  
    try {
      // Use the rewritten API route
      const response = await fetch('http://localhost:8000/api/analyze', {
        method: 'POST',
        body: formData,
      });
  
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      const data = await response.json();
      setResult(data.result);
    } catch (error) {
      console.error('Error:', error);
      setResult('An error occurred while analyzing the image.');
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className="container mx-auto px-4 py-8">
      <Head>
        <title>Image Analysis with Gemini</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 className="text-3xl font-bold text-center mb-8">Image Analysis with Gemini</h1>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="image" className="block text-sm font-medium text-gray-700 mb-2">
            Upload Image:
          </label>
          <input
            type="file"
            id="image"
            accept="image/*"
            onChange={handleImageChange}
            className="block w-full text-sm text-gray-500
              file:mr-4 file:py-2 file:px-4
              file:rounded-md file:border-0
              file:text-sm file:font-semibold
              file:bg-blue-50 file:text-blue-700
              hover:file:bg-blue-100"
          />
        </div>
        <div>
          <label htmlFor="prompt" className="block text-sm font-medium text-gray-700 mb-2">
            Custom Prompt:
          </label>
          <textarea
            id="prompt"
            value={prompt}
            onChange={handlePromptChange}
            placeholder="Enter your custom prompt here..."
            className="mt-1 block w-full rounded-md text-white p-2 border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            rows={4}
          />
        </div>
        <button
          type="submit"
          disabled={isLoading}
          className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:bg-indigo-300"
        >
          {isLoading ? 'Analyzing...' : 'Analyze Image'}
        </button>
      </form>
      
      {result && (
        <div className="mt-8 p-4 bg-gray-100 rounded-md">
          <h2 className="text-xl font-semibold mb-2">Analysis Result:</h2>
          <p className="text-gray-700 whitespace-pre-wrap text-bold">{result}</p>
        </div>
      )}
    </div>
  );
}