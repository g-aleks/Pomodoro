useEffect(() => {
  setUser({});
  const abortController = new AbortController();

  async function loadUser() {
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/users/${userID}`,
        { signal: abortController.signal }
      );
      const userFromAPI = await response.json();
      setUser(userFromAPI);
    } catch (error) {
      if (error.name === "AbortError") {
        // Ignore `AbortError`
        console.log("Aborted", userID);
      } else {
        throw error;
      }
    }
  }

  loadUser();

  return () => abortController.abort();
}, [userID]);