import Request from "./Request";
import cheerio from "cheerio-without-node-native";

const apiDomain = "https://www.v2ex.com";

/**
 * 获取帖子列表
 * @param {*} node 节点名称
 * @param {*} page 页码
 */
export const nodeTopics = (node, page) => {
  return Request.getHtml(`${apiDomain}/go/${node}?p=${page}`).then(data => {
    const items = [];
    const $ = cheerio.load(data);
    $('#Main .cell[class^="cell from"]').each(function(i, v) {
      var item = $(v);
      var avatar = item.find(".avatar").attr("src");
      var title = item.find(".item_title > a").text();
      var url = item.find(".item_title > a").attr("href");
      var username = item
        .find(".fade strong")
        .first()
        .find("a")
        .text();
      var replies = item.find(".count_livid").text();
      var timeStr = item.find(".fade").contents()[1];
      let time = undefined;
      if (timeStr) {
        time = timeStr.data.match("•([^•]*)")[1];
        if (time) time = time.replace(/\s/g, "");
      }
      var m = url.match(/^\/t\/(\d*)/);
      items.push({
        id: m ? m[1] : null,
        title,
        avatar,
        member: {
          username,
          avatar_normal: avatar
        },
        replies,
        time
      });
    });
    return items;
  });
};
