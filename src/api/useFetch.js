export function fetchData(
  url,
  method,
  contentType,
  data,
  callBackSuccess,
  callBackError
) {
  const URL_API = "http://192.168.20.100";
  let header = {
    Authorization:
      "Basic " + btoa("Ds7C2xG+BVHPAvUON5VijQ==:JDfmfXQvuqHrXBdUARcoLw=="),
    "Content-Type": contentType,
  };
  if (contentType === "" || contentType === null) {
    header = {
      Authorization:
        "Basic " + btoa("Ds7C2xG+BVHPAvUON5VijQ==:JDfmfXQvuqHrXBdUARcoLw=="),
    };
  }

  fetch(URL_API + url, {
    method: method,
    headers: header,
    body: data,
  })
    .then((res) => res.json())
    .then(
      (res) => callBackSuccess(res),
      (error) => callBackError(error)
    );
}
