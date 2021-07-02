import axios from "axios";

export async function findPosts(
  setCallback: Function,
  setLoading: Function,
  query: string
) {
  setLoading(true);
  try {
    if (!query || query === "") {
      setLoading(false);
      return;
    }
    const headers = {
      "Content-Type": "application/json",
      Authorization: process.env.REACT_APP_TOKEN,
    };
    const response = await axios.post(
      process.env.REACT_APP_API!,
      {
        tag: query,
      },
      { headers: headers }
    );
    if (!response.data) {
      setCallback([]);
      setLoading(false);

      return;
    }

    setCallback(response.data);
    setLoading(false);
  } catch (error) {
    console.error(error);
  }
}
