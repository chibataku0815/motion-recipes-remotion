export const getSpokeAngles = (
  spokeCount: number,
  rotationOffsetDeg: number,
): number[] => {
  return Array.from({ length: spokeCount }, (_, index) => {
    return rotationOffsetDeg + (360 / spokeCount) * index;
  });
};
