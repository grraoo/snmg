/**
 * Smoothly scroll element to the given target (element.scrollTop) for the given duration
 * @param {object} element element for scroll to
 * @param {number} target position for element for scroll to (element.scrollTop)
 * @param {number} duration time for scrolling
 * @return {Promise} promise that's fulfilled when done, or rejected if
    interrupted
 */
const smoothScrollTo = (element, target, duration) => {
  target = Math.round(target);
  duration = Math.round(duration);
  if (duration < 0) {
    return Promise.reject(`bad duration`);
  }
  if (duration === 0) {
    element.scrollTop = target;
    return Promise.resolve();
  }

  const startTime = Date.now();
  const endTime = startTime + duration;

  const startTop = element.scrollTop;
  const distance = target - startTop;

  // based on http://en.wikipedia.org/wiki/Smoothstep
  const getSmoothStep = (start, end, point) => {
    if (point <= start) {
      return 0;
    }
    if (point >= end) {
      return 1;
    }
    const x = (point - start) / (end - start); // interpolation
    return x * x * (3 - 2 * x);
  };

  return new Promise(function (resolve, reject) {
    let scrollInterval;
    // This is to keep track of where the element's scrollTop is supposed to be, based on what we're doing
    let previousTop = element.scrollTop;

    // This is like a think function from a game loop
    const scrollFrame = function () {
      if (element.scrollTop !== previousTop) {
        // console.log(`interrupted`);
        clearInterval(scrollInterval);

        reject(`interrupted`);
        return;
      }

      // set the scrollTop for this frame
      const now = Date.now();
      const point = getSmoothStep(startTime, endTime, now);
      const frameTop = Math.round(startTop + (distance * point));
      element.scrollTop = frameTop;
      // check if we're done!
      if (now >= endTime) {
        // console.log(`resolve1`);
        clearInterval(scrollInterval);
        resolve();
        return;
      }
      // console.log(target, element.scrollTop, frameTop);

      // If we were supposed to scroll but didn't, then we probably hit the limit, so consider it done; not interrupted.
      if (element.scrollTop === previousTop &&
        element.scrollTop !== frameTop) {
        // console.log(`resolve2`);
        // clearInterval(scrollInterval);

        // resolve();
        return;
      }
      previousTop = element.scrollTop;

      // schedule next frame for execution
      // setTimeout(scrollFrame, 0);
    };

    // boostrap the animation process
    // setTimeout(scrollFrame, 0);
    scrollInterval = setInterval(scrollFrame, 0);
  });
};

export default smoothScrollTo;
