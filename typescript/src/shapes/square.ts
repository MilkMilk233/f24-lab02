import { Shape } from "./shape.js";

// This is commeent
function newSquare(sideLen: number): Shape {
    return {
        computeArea: function (): number {
            return sideLen * sideLen
        }
    }
}

export { newSquare }