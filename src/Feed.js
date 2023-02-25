import React, { useState, useEffect } from "react";
import "./Feed.css";
import Post from "./Post";
import TweetBox from "./TweetBox";
import db from "./firebase";
function Feed() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    db.collection("posts").onSnapshot((snapshot) =>
      setPosts(snapshot.docs.map((doc) => doc.data()))
    );
  },[]);
  return (
    <div className="feed">
      {/* Header */}
      <div className="feed__header">
        <h2>Home</h2>
      </div>

      {/* TwiitBox */}
      <TweetBox />
      {/* Post */}
      <Post
        displayName="Javokhir"
        userName="Javokhir_seo"
        verified
        text="I have done one more project"
        avatar="https://lh3.googleusercontent.com/GsjIIFyVt2AlyJqOM9pjNjfXRmIb0QWJcdKlt-rcws1ECQvvyvAyRCLRxShkFTEFlbHoZGFcK_dEEH2VEnK6IroI67DCVHrxSfo9jElmKdRY4MlmOdSfJLxlz6sLSaGAw3bb-mqC4oIBznjX0WgzT2BpZrlLyzM8r81GdmK-fEipjCcDwDbBbTGRybiDAw05L-QRrd0P7RHXShItwV7Ul_DFwWjzIRtG7Y7s3vP76IBOvGiGYYynEPWPCjXWzLvq-acWNIlempUKeox48xgyiPrzG-85kM4CaDaZ5gQB01dAWFc4aV0jW8E2_RAHxa-5kYeNA-DrhM-J20vctqGyPW1GK9IvVvEBVd0cbgy_vMI5r6JZ_pIa-t8Z1bzpWTbfEfiWZZ_LuGmmWAkuT6d7Hk1YfavTNftBY2lwdVwy4qDQk73RHp6H76ZMj8Cvq6hR77StA1cdd6ukjMaYgnQhMxx-Nc1oRKHIm7ixhYtpcs_ZJIwBzwWTg9g6qMGKj5BJEzxa7zl4ZmX19QMScq6yy2Gsc2m3X2tf2o5JG0M5cgD9g2tUN7FHShal07voIseoOfqpW9iYMsT14qP2hHbOmdo8yL09Q0JUqgAt7X-MkHT1iA6ow5laffm3Q0_cg7Kt5XrzZVQzFVuJB_gmeVsvo3U5XLFwHsOiTdRmOh6pEbv6SkxjTQbjsCN9O0_OtRCc17E8xi_lBnN9TEkRBiBonkIlcwp9IUn8GL4U5QyeFdtNtBNGkVp4rbnSDbwDsk-_XtSGvcEMKouqjeBnHiNWK1I6_wKDeeh6ZSPayfZcnxqmLaV7Si3T1Fgd3Rmmi1Zq8b2YRP0KuVZ2GTQT-TR_LRAcwqyr_CKLs2Z0D4iY52PnSbaqtuZXAexNLOBVKFOLu-872sCx9eCORBTGkCyjeDIhbRSpZpiyDUFEx3DQh39fpFu7G6m3KPrriqIC2uyFnzxG3vLJn4GgAPVH=w512-h682-no?authuser=0"
        image="https://media4.giphy.com/media/vzO0Vc8b2VBLi/giphy.gif?cid=ecf05e47it7sched14tcqxj3r2hvlkxpl2917fj0gwf9a60u&rid=giphy.gif&ct=g"
      />
    </div>
  );
}

export default Feed;
