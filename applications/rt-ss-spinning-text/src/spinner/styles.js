const getSpinnerStyles = (speed) => {
  return {
    counter: {
      marginBottom: "12px",
      overflow: "hidden",
      "& span": {
        position: "relative",
        overflow: "hidden",
        "& .ct-node-enter": {
          background: "transparent",
          transform: "translateY(100%)",
        },
        "& .ct-node-enter.ct-node-enter-active": {
          transform: "translateY(0)",
          transition: `all ${speed}ms`,
        },
        "& .ct-node-exit": {
          left: 0,
          position: "absolute",
          transform: "translateY(0)",
        },
        "& .ct-node-exit.ct-node-exit-active": {
          transform: "translateY(-100%)",
          transition: `all ${speed}ms`,
        },
      },
      "& .count-wrapper": {
        display: "inline-block",
      },
    },
  };
};

export { getSpinnerStyles };
