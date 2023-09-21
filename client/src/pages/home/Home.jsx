import React, { useState } from "react";
import { TextField, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Home = () => {

    const [details, setDetails] = useState({
        name: "",
    });
    const navigate = useNavigate();
    async function handleSubmit(e) {
        e.preventDefault();

        await fetch("/feedsClient", {
        method: "POST",
        body: JSON.stringify({
            name: details.name,
        }),
        headers: {
            "Content-Type": "application/json",
        },
        });
        
        e.target.reset();
        navigate("/feed")
    }
  
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <TextField
          required
          id="outlined-basic"
          label="Name"
          name="name"
          variant="outlined"
          onChange={(e) => {
            setDetails({ ...details, [e.target.name]: e.target.value });
          }}
        />
              <Button type="submit" variant="contained"
                  sx={{
                    textTransform : "none",
                }}
              >
          Submit
        </Button>
      </form>
    </div>
  );
};

export default Home;
