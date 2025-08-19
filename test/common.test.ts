import { describe, expect, it } from "vitest"
import { relativeTime } from "../shared/utils"

describe("shared utils", () => {
  it("relativeTime returns 刚刚 for current timestamp", () => {
    expect(relativeTime(Date.now())).toBe("刚刚")
  })
})
