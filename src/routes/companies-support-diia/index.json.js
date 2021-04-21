import companies from "../../content/companies-support-diia.md";

const content = JSON.stringify(companies);

export function get(req, res) {
  res.writeHead(200, {
    'Content-Type': 'application/json'
  });
  
  res.end(content);
}