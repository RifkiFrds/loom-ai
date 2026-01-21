import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Upload, Loader2, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export const UploadSection = ({ onUpload, loading, error }) => {
    const [dragActive, setDragActive] = useState(false);
    const [file, setFile] = useState(null);
    const inputRef = useRef(null);

    const handleDrag = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setDragActive(e.type === 'dragenter' || e.type === 'dragover');
    };

    const handleDrop = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setDragActive(false);

        const droppedFile = e.dataTransfer.files?.[0];
        if (droppedFile) validateAndSetFile(droppedFile);
    };

    const handleChange = (e) => {
        const selectedFile = e.target.files?.[0];
        if (selectedFile) validateAndSetFile(selectedFile);
    };

    const validateAndSetFile = (selectedFile) => {
        const validTypes = [
            'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
            'application/vnd.ms-excel',
            'text/csv',
        ];

        const ext = '.' + selectedFile.name.split('.').pop().toLowerCase();

        if (validTypes.includes(selectedFile.type) || ['.xlsx', '.xls', '.csv'].includes(ext)) {
            setFile(selectedFile);
        } else {
            alert('Please upload a valid Excel or CSV file.');
        }
    };

    const handleSubmit = () => {
        if (!file || loading) return;
        onUpload(file);
    };

    // Optional UX reset after success
    useEffect(() => {
        if (!loading && !error) {
            // Uncomment jika ingin auto reset
            // setFile(null);
        }
    }, [loading, error]);

    return (
        <section className="max-w-3xl mx-auto py-12">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-loom-light/[0.02] border border-loom-light/10 backdrop-blur-sm p-8 md:p-12 rounded-2xl text-center"
            >
                <div
                    className={`relative border-2 border-dashed rounded-xl p-10 flex flex-col items-center gap-4 cursor-pointer
                    ${dragActive ? 'border-loom-accent bg-loom-accent/5' : 'border-loom-light/20 hover:border-loom-light/40'}`}
                    onDragEnter={handleDrag}
                    onDragOver={handleDrag}
                    onDragLeave={handleDrag}
                    onDrop={handleDrop}
                    onClick={() => inputRef.current?.click()}
                >
                    <input
                        ref={inputRef}
                        type="file"
                        hidden
                        accept=".xlsx,.xls,.csv"
                        onChange={handleChange}
                    />

                    <div className="bg-loom-light/5 p-4 rounded-full">
                        <Upload className="h-8 w-8 text-loom-accent" />
                    </div>

                    <div>
                        <p className="font-serif text-lg text-loom-light">
                            {file ? file.name : 'Drag & drop your dataset here'}
                        </p>
                        <p className="font-mono text-sm text-loom-light/50">
                            {file ? 'Ready to analyze' : 'Supports .xlsx, .csv'}
                        </p>
                    </div>
                </div>

                {error && (
                    <div className="mt-6 p-4 bg-red-500/10 border border-red-500/20 text-red-200 rounded-lg flex items-center justify-center gap-2 font-mono text-sm">
                        <AlertCircle className="h-4 w-4" />
                        {error}
                    </div>
                )}

                <div className="mt-8 flex justify-center">
                    <Button
                        onClick={handleSubmit}
                        disabled={!file || loading}
                        className="h-12 px-8 bg-loom-light text-loom-dark hover:bg-white font-mono uppercase tracking-wide"
                    >
                        {loading ? (
                            <>
                                <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Analyzing...
                            </>
                        ) : (
                            'Generate Insights'
                        )}
                    </Button>
                </div>
            </motion.div>
        </section>
    );
};
