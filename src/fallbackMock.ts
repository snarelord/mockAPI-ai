// simple static examples based on prompt type
// random id gens, booleans etc

export const getFallbackMock = (description: string): any => {
  // extremely basic fallback for common cases
  if (description.toLowerCase().includes("todo")) {
    return [
      { id: 1, title: "Buy milk", isComplete: false },
      { id: 2, title: "Build AI mocker", isComplete: true },
    ];
  }

  return { message: "Fallback mock: No AI key provided and no specific mock found." };
};
