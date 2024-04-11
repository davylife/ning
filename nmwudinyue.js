var body = $response.body;

body = body.replace(/"\w+_name"/g, '"vip_expire":"2999-12-31 18:10:32","flag":"year","qq_name"');



$done({ body });