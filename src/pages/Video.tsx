import React from 'react';

function Video() {
  const videos = [
    {
      id: 'YkeE7oRxF24',
      title: 'Few Shot Learning with Code',
      description: 'An introduction to how few-shot learning enables model training on limited data for rapid adaptation. In this video, I discuss Prototypical Networks and explain how they use class prototypes to facilitate efficient learning.'
    },
    {
      id: 'HIRj5pH2t-Y',
      title: '3D Point Cloud Classification in Python',
      description: 'An overview of 3D LiDAR Point Cloud object classification and an introduction to PointNet. In this video, I explain how PointNet is used for classifying 3D objects with a detailed PyTorch code walkthrough.'
    },
    {
      id: 'VpyJy0DnWHE',
      title: '3D Point Clouds Visualization in Python',
      description: 'Learn how to visualize LiDAR Point Cloud data in various file formats using Open3D and PPTK Python libraries, simplifying the process for popular datasets in computer vision.'
    },
    {
      id: 'TWIVP4HQQGQ',
      title: 'How To Visualize LiDAR Point Cloud In Python | KITTI Dataset',
      description: 'The KITTI dataset is one of the most popular datasets in autonomous driving research. In this video, I show how to visualize and inspect this data using Python for better understanding and analysis.'
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">AI Video Tutorials</h1>
        <p className="text-xl text-gray-600 mb-12">I've always loved teaching. It started in high school, helping classmates with math, and continued through college and grad school with statistics and computer science. This passion inspired me to share my knowledge of AI and machine learning online. After a brief break for other commitments, I've resumed making videos, with more tutorials in the works.</p>
        
        <div className="grid md:grid-cols-2 gap-8">
          {videos.map((video) => (
            <div key={video.id} className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                <iframe
                  src={`https://www.youtube.com/embed/${video.id}`}
                  title={video.title}
                  className="absolute top-0 left-0 w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-semibold text-gray-900 mb-3">
                  {video.title}
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  {video.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Video;