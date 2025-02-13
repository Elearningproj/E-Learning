import React, { useState } from "react";
import DashboardNavbar from "../../Components/User/DashboardNavbar";
import Sidebar from "../../Components/User/Sidebar";

const DiscussionPage = () => {
  const [discussions, setDiscussions] = useState([
    {
      id: 1,
      title: "What are the best resources for React beginners?",
      author: "John Doe",
      timestamp: "2 hours ago",
      replies: ["Check the official React docs!", "Try Codecademy."],
    },
  ]);

  const [newDiscussion, setNewDiscussion] = useState("");
  const [replyText, setReplyText] = useState("");

  const handleNewDiscussion = () => {
    if (!newDiscussion.trim()) return;

    setDiscussions([
      ...discussions,
      {
        id: discussions.length + 1,
        title: newDiscussion,
        author: "Anonymous",
        timestamp: "Just now",
        replies: [],
      },
    ]);
    setNewDiscussion("");
  };

  const handleAddReply = (index) => {
    if (!replyText.trim()) return;

    const updatedDiscussions = [...discussions];
    updatedDiscussions[index].replies.push(replyText);
    setDiscussions(updatedDiscussions);
    setReplyText("");
  };

  return (
    <div className="flex flex-col">
      <DashboardNavbar />
      <Sidebar/>
      <div className="ml-48 md:ml-64 lg:ml-80 p-8">
        <h1 className="text-3xl font-bold text-blue-600 mb-6">
          Discussion Board
        </h1>

        {/* Discussion Form */}
        <div className="w-full md:w-2/3 p-4 shadow-md rounded-md mb-6 border border-gray-200">
          <textarea
            className="w-full border border-gray-300 rounded-md p-2 mb-2"
            rows="3"
            placeholder="Start a new discussion..."
            value={newDiscussion}
            onChange={(e) => setNewDiscussion(e.target.value)}
          />
          <button
            className="bg-blue-600 text-white px-4 py-2 rounded-md w-full"
            onClick={handleNewDiscussion}
          >
            Post Discussion
          </button>
        </div>

        {/* Discussion Threads */}
        <div className="w-full md:w-2/3">
          {discussions.map((discussion, index) => (
            <div
              key={discussion.id}
              className="shadow-md rounded-md p-4 mb-4 border border-gray-200"
            >
              <h2 className="text-xl font-semibold text-gray-800">
                {discussion.title}
              </h2>
              <p className="text-sm text-gray-500">
                Posted by {discussion.author} - {discussion.timestamp}
              </p>
              <div className="ml-4 mt-2">
                {discussion.replies.map((reply, replyIndex) => (
                  <p key={replyIndex} className="text-gray-700 mt-1">
                    • {reply}
                  </p>
                ))}
              </div>

              {/* Reply Form */}
              <div className="mt-3">
                <input
                  className="border border-gray-300 rounded-md p-2 w-full"
                  placeholder="Write a reply..."
                  value={replyText}
                  onChange={(e) => setReplyText(e.target.value)}
                />
                <button
                  className="bg-blue-600 text-white px-4 py-2 rounded-md mt-2 w-full"
                  onClick={() => handleAddReply(index)}
                >
                  Reply
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DiscussionPage;
