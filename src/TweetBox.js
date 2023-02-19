import React from "react";
import "./TweetBox.css";
import { Avatar, Button } from "@mui/material";

function TweetBox() {
  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
          <Avatar src="https://lh3.googleusercontent.com/RxWK97N8HibWwaiqlAJLpZakDCEpl7BvkwBtyIWHHP8vruYVAQKToi9xzpjy5RIfRzYWsop_JWXJDfRzUBfP5GBp-6uNY7boECvVIZtxcz_xpQpsmZjUe2z18lrBWOnye5Ku9Pyx5NlUWj8j91xSNdvP6AVfNvP_eBtXiqm1CuAQxtLpLo-v38zawTBca5eL7kPcYXDNEg5or3twW9wpGex6Ef_SpZiBEUiN39724T1aGsWXgU0MEIPmHmHPTeBPbvF4xiJAoj7HCzqXTkVbt4lK5wfNXk9wtxOLyAwogEIfZ5GLqvoJrN76VK_MrNtjwYT3jm5FZgVdy-Wb4VCxzpjqCy5Hz7FL2Q2yjRQ0UwHuL_ieoZp6DJBlCf2NQeU7INZbfq81smIBApQis9ESONPMnfZWgENxGpdy4hBRZXywWbISj_fYnCZh6AFMWXzfNg1-WwR4lehSX4FbOpUrX95KWhEcbRt519-zBgH3en9KQOIrVbaLdMSjVoYXaoBs7bbBO1at8pxK_gmxdpm6ANgtR5cZVNUSsWmOqPmFHTXgh3adZVMEvqsORQ6A4yvSX15ohGFUQ-BvvAlpvJ0cBXUt44eq9jYdlgwVLB4TJq7hkC_zLkqnSve7Bq33l40MVoqDvogmIQoFs6-lbJLsxmMM9lVnJ02XaDvTFtlKABvhVnA-Y8wq3PjgHfZFDZTMwvFAxBZANccQfiM3TAO6cz7uGBP89ekHmpjVrEcFEcU_umlVvdpDnAV3uNGiC3dGgVefoYq4CfHQ3oJbmwGJpbOiwKz4_rZpzD2YtrDJ2uqbZh28g4AdlOq53OZQ7n9jsMwcv8yVtn2VPQyIRlLqyM5ApDvcYsYHmLjFxHYbMEhr35yCoNUYfMZpWHjBO9TLuWFT1ru09qJhBWZctW1FIY_vYKDQNToRcEKDXz-KmYZ0wdPtdzoGtuSDWNndhAd0cWVPMzhEfmSAS0pA=w640-h854-no?authuser=0" />
          <input placeholder="What's happening?" type="text" />
        </div>
        <input className="tweetBox__imageInput" placeholder="Enter image URL" type="text" />

        <Button  className="tweetBox__tweetButton">Tweet</Button>
      </form>
    </div>
  );
}

export default TweetBox;
