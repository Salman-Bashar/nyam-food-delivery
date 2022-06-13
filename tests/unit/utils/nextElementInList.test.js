import nextElementInList from "@/utils/nextElementInList";

describe("nextElementInList", () => {
  it("locates current element & returns the next element in list", () => {
    const list = ["A", "B", "C", "D", "E"];
    const currentElement = "C";
    const result = nextElementInList(list, currentElement);
    expect(result).toBe("D");
  });

  describe("when element is at the end of the list", () => {
    it("locates next element at the start of the list", () => {
      const list = ["A", "B", "C", "D", "E"];
      const currentElement = "E";
      const result = nextElementInList(list, currentElement);
      expect(result).toBe("A");
    });
  });
});
