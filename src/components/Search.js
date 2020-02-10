import React from "react";

const Search = props => {
  const [search, setSearch] = useState([]);

  useEffect(() => {
    try {
      // Load async data from an inexistent endpoint.
      if (operation === "create") {
        async function fetchData() {
          const response = await API.get("createTask", {
            title: taskField,
            isDone: false
          });
          setTaskField("");
          setOperation("");
          console.log("👉 Returned data:", response);
        }
        fetchData();
      }
    } catch (e) {
      console.log(`😱 Axios request failed: ${e}`);
    }
  }, [operation, taskField]);

  return <div></div>;
};

export default Search;
