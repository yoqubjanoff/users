  import React, { useState } from "react";
  import Input from "../../components/ReuseAble/Input";
  import Button from "../../components/ReuseAble/Buttton";
  import { API_URL } from "../../services/api";
  import { toast } from "react-toastify";
  import "react-toastify/dist/ReactToastify.css";
  import { useUserContext } from "../../context";

  const Add = () => {
    const [state] = useUserContext();
    const { selected } = state;

    const [getdata, setGetdata] = useState({
      id: selected.id || "",
      name: selected.name || "",
      avatar: selected.avatar || "",
      price: selected.price || 0,
      description: selected.description || "",
      manufacture: selected.manufacture || "",
      size: selected.size || "",
    });

    const handleAdd = () => {
      if (selected.id) {
        fetch(`${API_URL}/${selected.id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(getdata),
        })
          .then((response) => response.json())
          .then((data) => {
            dispatch({
              type: 'setSelected',
              payload: {},
            });
            toast.success("Data has been sent successfully");
          })
          .catch((error) => {
            toast.error("An error occurred" + error);
          });
      } else {
        if (
          getdata.name === "" ||
          getdata.avatar === "" ||
          getdata.price === 0 ||
          getdata.description === "" ||
          getdata.manufacture === "" ||
          getdata.size === 0
        ) {
          toast.error("Input fields cannot be empty");
          return;
        }
    
      fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(getdata),
      })
        .then((response) => response.json())
        .then((data) => {
          dispatch({
            type: 'setSelected',
            payload: {},
          });
          toast.success("Data has been sent successfully");
        })
        .catch((error) => {
          toast.error("An error occurred");
        });}
    };
    
    console.log(getdata);


    return (
      <section className="w-ful pt-10 pb-10 ">
        <div className="w-full flex flex-col items-center max-w-[1320px] mx-auto">
          <h2 className="text-4xl text-center mb-10">Add info</h2>
          <div className="w-full flex flex-col items-center gap-10">
            <Input
              color="#ccc"
              width={"500px"}
              placeholder={"Name..."}
              placeholderColor="#ccc"
              value={getdata.name}
              onChange={(e) => setGetdata({ ...getdata, name: e.target.value })}
            />
            <Input
              color="#ccc"
              width={"500px"}
              placeholder={"Avatar..."}
              placeholderColor="#ccc"
              value={getdata.avatar}
              onChange={(e) => setGetdata({ ...getdata, avatar: e.target.value })}
            />
            <Input
              color="#ccc"
              width={"500px"}
              placeholder={"Price..."}
              placeholderColor="#ccc"
              value={getdata.price}
              type={"number"}
              onChange={(e) =>
                setGetdata({
                  ...getdata,
                  price: e.target.value,
                })
              }
            />
            <Input
              color="#ccc"
              width={"500px"}
              placeholder={"Description..."}
              placeholderColor="#ccc"
              value={getdata.description}
              onChange={(e) =>
                setGetdata({ ...getdata, description: e.target.value })
              }
            />
            <Input
              color="#ccc"
              width={"500px"}
              placeholder={"Manufacture..."}
              placeholderColor="#ccc"
              value={getdata.manufacture}
              onChange={(e) =>
                setGetdata({ ...getdata, manufacture: e.target.value })
              }
            />
            <Input
              color="#ccc"
              width={"500px"}
              placeholder={"Size..."}
              placeholderColor="#ccc"
              value={getdata.size}
              type={"number"}
              onChange={(e) =>
                setGetdata({
                  ...getdata,
                  size: e.target.value,
                })
              }
            />
            <Button
              width={"500px"}
              border={"1px solid #e1e1e1"}
              height={"60px"}
              borderradius={"8px"}
              text={"ADD"}
              allpadding={"8px 230px"}
              onClick={handleAdd}
            />
          </div>
        </div>
      </section>
    );
  };

  export default Add;
