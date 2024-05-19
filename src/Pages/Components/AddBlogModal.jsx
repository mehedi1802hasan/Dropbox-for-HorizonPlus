import React, { useState, useContext } from "react";
import { RxCross1 } from "react-icons/rx";
import damiImg from '../../assets/damiImg.png';
import { BlogContext } from "../../NewBlogContext";

const AddBlogModal = ({ isAdd, setIsAdd }) => {
    const { addBlog } = useContext(BlogContext);
    const [blogName, setBlogName] = useState('');
    const [blogType, setBlogType] = useState('');
    const [blogImage, setBlogImage] = useState(null);

    function closeModal() {
        setIsAdd(false);
        setBlogName('');
        setBlogType('');
        
    }

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setBlogImage(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSave = () => {
        if (blogName && blogImage) {
            addBlog({ type: blogType,title: blogName, image: blogImage });
            setBlogName('');
            setBlogType('');
            setBlogImage(null);
            closeModal();
        }
    };

    return (
        <div className="font-montserrat bg-white">
            <dialog
                open={isAdd}
                id="my_modal_2"
                className="modal px-5 bg-black bg-opacity-50 md:px-0 lg:px-0 pt-4 md:pt-0 lg:pt-0"
            >
                <div className="modal-box px-9 text-[#1A2521] font-montserrat bg-white md:w-[750px] lg:w-[430px] py-8">
                    <div className="flex justify-between items-center">
                        <h3 className="font-bold text-[20px]">Add New Blog</h3>
                        <h3 className="hover:text-red-700" onClick={closeModal}>
                            <RxCross1 className="cursor-pointer" />
                        </h3>
                    </div>
                    <div>
                        <h3 className="text-[13px] font-semibold mt-2 mb-[2px]">Blog Title</h3>
                        <input
                            type="text"
                            className="w-full h-[40px] border px-4"
                            value={blogName}
                            placeholder="enter the blog title here..."
                            onChange={(e) => setBlogName(e.target.value)}
                        />
                    </div>
                    <div>
                        <h3 className="text-[13px] font-semibold mt-2 mb-[2px]">Blog Type</h3>
                        <input
                            type="text"
                            className="w-full h-[40px] border px-4"
                            value={blogType}
                            placeholder="enter the blog type here..."
                            onChange={(e) => setBlogType(e.target.value)}
                        />
                    </div>
                    <div className="relative w-44 mx-auto mt-3 mb-6">
                        <input
                            type="file"
                            className="cursor-pointer opacity-0 border-2 w-full p-2 mt-1 text-base text-[#1A252] h-[160px] rounded-lg"
                            onChange={handleFileChange}
                        />
                        <div className="absolute top-0 left-0 pointer-events-none w-full h-[160px] my-2 flex items-center gap-1 border-2 border-dotted py-1 px-2 justify-center bg-[#F4F7FB] rounded-md">
                            <div>
                                <img
                                    className="flex justify-center items-center w-[45px] mx-auto"
                                    src={blogImage || damiImg}
                                    alt="Uploaded"
                                />
                                <p className="text-[9px] text-center">Please Click & upload Blog Image</p>
                            </div>
                        </div>
                    </div>
                    <button
                        className="h-[45px] rounded-md w-full bg-[#05937F] hover:bg-[#136459] text-[13px] text-white"
                        onClick={handleSave}
                    >
                        Save
                    </button>
                </div>
                <form method="dialog" className="modal-backdrop">
                    <button onClick={closeModal}>Close</button>
                </form>
            </dialog>
        </div>
    );
};

export default AddBlogModal;
