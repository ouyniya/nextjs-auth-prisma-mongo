"use client";

import ReactPlayer from "react-player";

const MusicPlayer = ({ embedId }) => {

  return (

<div className="hidden">
  <ReactPlayer
    src={`https://www.youtube.com/watch?v=${embedId}`}
    playing={true} // เริ่มต้นเป็น true ถ้าต้องการ autoplay
    muted={false}    // ถ้าตั้งเป็น true จะเล่นทันทีแบบไม่มีเสียง
    controls={false}  // ไม่โชว์ปุ่มควบคุมของ YouTube
    width="0"         // กำหนดขนาดเป็น 0
    height="0"        // กำหนดขนาดเป็น 0
  />
</div>
  );
};

export default MusicPlayer;