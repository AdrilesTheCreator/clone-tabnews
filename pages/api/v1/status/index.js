function status(request, response) {
  response.status(200).json({ chave: "réçeba" });
}

export default status;
