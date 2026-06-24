const dns = require("dns");

dns.resolveSrv(
  "_mongodb._tcp.cluster0.nbhcn0g.mongodb.net",
  (err, addresses) => {
    console.log("Error:", err);
    console.log("Addresses:", addresses);
  }
);