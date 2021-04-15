const dummy = [...new Array(12)];

const col = (type) =>
  dummy.map((_, idx) => `col${type !== "" ? `-${type}-` : "-"}${++idx}`);

const table = [
  "table-responsive",
  "table-light",
  "table-dark",
  "table-striped",
  "table-bordered",
  "table-hover"
];

const satuan = [
  "show",
  "hide",
  "slide",
  "active",
  "carousel",
  "container-fluid",
  "collapsing",
  "collapsed",
  "navbar-nav",
  "navbar-dark",
  "navbar-toggler-icon",
  ...col("md"),
  ...col("sm"),
  ...col("lg"),
  ...table
];

module.exports = [/^carousel-/, ...satuan];
