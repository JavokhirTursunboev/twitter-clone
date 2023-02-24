import { Avatar } from "@mui/material";
import VerifiedIcon from "@mui/icons-material/Verified";
import React from "react";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import RepeatIcon from "@mui/icons-material/Repeat";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import PublishIcon from "@mui/icons-material/Publish";
import "./Post.css";
function Post({ displayName, userName, verified, text, image, avatar }) {
  return (
    <div className="post">
      <div className="post__avatar">
        <Avatar src="https://lh3.googleusercontent.com/GsjIIFyVt2AlyJqOM9pjNjfXRmIb0QWJcdKlt-rcws1ECQvvyvAyRCLRxShkFTEFlbHoZGFcK_dEEH2VEnK6IroI67DCVHrxSfo9jElmKdRY4MlmOdSfJLxlz6sLSaGAw3bb-mqC4oIBznjX0WgzT2BpZrlLyzM8r81GdmK-fEipjCcDwDbBbTGRybiDAw05L-QRrd0P7RHXShItwV7Ul_DFwWjzIRtG7Y7s3vP76IBOvGiGYYynEPWPCjXWzLvq-acWNIlempUKeox48xgyiPrzG-85kM4CaDaZ5gQB01dAWFc4aV0jW8E2_RAHxa-5kYeNA-DrhM-J20vctqGyPW1GK9IvVvEBVd0cbgy_vMI5r6JZ_pIa-t8Z1bzpWTbfEfiWZZ_LuGmmWAkuT6d7Hk1YfavTNftBY2lwdVwy4qDQk73RHp6H76ZMj8Cvq6hR77StA1cdd6ukjMaYgnQhMxx-Nc1oRKHIm7ixhYtpcs_ZJIwBzwWTg9g6qMGKj5BJEzxa7zl4ZmX19QMScq6yy2Gsc2m3X2tf2o5JG0M5cgD9g2tUN7FHShal07voIseoOfqpW9iYMsT14qP2hHbOmdo8yL09Q0JUqgAt7X-MkHT1iA6ow5laffm3Q0_cg7Kt5XrzZVQzFVuJB_gmeVsvo3U5XLFwHsOiTdRmOh6pEbv6SkxjTQbjsCN9O0_OtRCc17E8xi_lBnN9TEkRBiBonkIlcwp9IUn8GL4U5QyeFdtNtBNGkVp4rbnSDbwDsk-_XtSGvcEMKouqjeBnHiNWK1I6_wKDeeh6ZSPayfZcnxqmLaV7Si3T1Fgd3Rmmi1Zq8b2YRP0KuVZ2GTQT-TR_LRAcwqyr_CKLs2Z0D4iY52PnSbaqtuZXAexNLOBVKFOLu-872sCx9eCORBTGkCyjeDIhbRSpZpiyDUFEx3DQh39fpFu7G6m3KPrriqIC2uyFnzxG3vLJn4GgAPVH=w512-h682-no?authuser=0" />
      </div>
      <div className="post__body">
        <div className="post__header">
          <div className="post__headerText">
            <h3>
              Summaya Jaloldinova{" "}
              <span className="post__headerSpecial">
                <VerifiedIcon className="post__badge" />
                @Summaya
              </span>
            </h3>
          </div>
          <div className="post__headerDescription">
            <p>I challenge you to build a Twitter Clone with React</p>
          </div>
        </div>
        <img
          src="https://media4.giphy.com/media/vzO0Vc8b2VBLi/giphy.gif?cid=ecf05e47it7sched14tcqxj3r2hvlkxpl2917fj0gwf9a60u&rid=giphy.gif&ct=g"
          alt="this is img"
        />
        <div className="post__footer">
          <ChatBubbleOutlineIcon fontSize="small" />
          <RepeatIcon fontSize="small" />
          <FavoriteBorderIcon fontSize="small" />
          <PublishIcon fontSize="small" />
        </div>
      </div>
    </div>
  );
}

export default Post;
