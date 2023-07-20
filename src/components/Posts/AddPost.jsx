import React from "react";
import Box from "@mui/material/Box";
import { Button } from "@material-tailwind/react";
import Modal from "@mui/material/Modal";
import { Input } from "@mui/material";
import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import Icon from "@mdi/react";
import { mdiNoteEdit } from "@mdi/js";
import Swal from "sweetalert2";
import { useDispatch } from "react-redux";
import { AddNewPost } from "../../actions/addPost";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: " solid #f2f2f2",
  boxShadow: 3,
  p: 4,
  borderRadius:'30px'
};

const AddPost = ({id}) => {

const dispatch = useDispatch()



    const [user, setUser] = useState();
    useEffect(() => {
        const userData = JSON.parse(localStorage.getItem("user"));
        setUser(userData);
      }, []);



  const navigate = useNavigate();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(title, body);

    const updatedPost = { title: title, body: body ,userId:user.id };
    try {

      dispatch(AddNewPost(updatedPost))
      // const updated = await axios.post(
      //   `https://jsonplaceholder.typicode.com/posts` , updatedPost
      // );
      // console.log(updated.data)
      setTitle('');
      setBody('');
      handleClose() 
      Swal.fire({
        title: `Your post was successfully Added`,
        icon: "success",
        confirmButtonText: "OK",
      });
  
    } catch (error) {
        handleClose() 
        Swal.fire({
            title: "Error",
            text: "something went wrong",
            icon: "error",
            confirmButtonText: "OK",
          });
      console.error(error.message);
    }
  };
  return (
    <div>
      {/* <Icon path={mdiNoteEdit} color={"blue"} size={1} onClick={handleOpen} /> */}
        <button className="bg-[#75d5c7a8] text-white hover:bg-white hover:text-black h-10 p-1 rounded-md" onClick={handleOpen} >Add Post</button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="flex flex-col">
            <label className="font-bold text-lg">Post Title</label>
            <Input
              onChange={(e) => setTitle(e.target.value)}
              id="name"
              value={title}
              type="text"
              variant="h6"
              component="h2"
              className="m-5"
            >
              Text in a modal
            </Input>{" "}
            <br></br>
            <label className="font-bold text-lg">Post Body</label>
            <Input
              id="text"
              type="text"
              onChange={(e) => setBody(e.target.value)}
              value={body}
              variant="h6"
              component="h2"
              className="m-5"
            >
              Text in a modal
            </Input>{" "}
            <br></br>
            <Button
              onClick={handleSubmit}
              className=" m-5 border-solid border-[#75d5c7] border-2 text-[#75d5c7] hover:bg-[#75d5c7] hover:text-[#ffffff]"
              variant="text"
            >
              Add
            </Button>
            <Button
              className="m-5 border-solid border-[#0b3e45] border-2 text-[#0b3e45] hover:bg-[#0b3e45] hover:text-[#ffffff]"
              variant="text"
              onClick={handleClose}
            >
              Cancel
            </Button>
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default AddPost;
