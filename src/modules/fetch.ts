const host:string = "https://127.0.0.1:8000"

export async function fetchGet<Type>(url: string): Promise<Type | undefined> {
  try {
    const response: Response = await fetch(host + url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    })
    const json: Type = await response.json();
    return json;
  } catch (error) {
    console.log(error);
  }
}

export async function fetchPost<Type>(url: string, data:Type):Promise<Response | undefined>{
  try {
    const response: Response = await fetch(host + url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    });

    const result: Response = await response.json();
    return result
  } catch (error) {
    console.log(error)
  }
}
// useFetchPut
// use FetchDelete