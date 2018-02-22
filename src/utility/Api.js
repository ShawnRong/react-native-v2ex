import Request from "./Request";
import cheerio from "cheerio-without-node-native";

const apiDomain = "https://www.v2ex.com";

// 节点列表 和 最新列表 网页dom相同
function parseHtml(data) {
  const items = [];
  const $ = cheerio.load(data);
  $("#Main .item").each((i, v) => {
    const item = $(v);
    const avatar = item.find(".avatar").attr("src");
    const title = item.find(".item_title > a").text();
    const url = item.find(".item_title > a").attr("href");
    const node = item.find(".fade .node").text();
    const username = item
      .find(".fade .node")
      .next()
      .find("a")
      .text();
    const replies = item.find(".count_livid").text();
    const timeStr = item.find(".fade").contents()[4];
    let time = undefined;
    if (timeStr) {
      time = timeStr.data.match("•(.*)•")[1];
      if (time) time = time.replace(/\s/g, "");
    }
    const m = url.match(/^\/t\/(\d*)/);
    items.push({
      id: m ? m[1] : null,
      title,
      avatar,
      member: {
        username,
        avatar_normal: avatar
      },
      node: {
        title: node
      },
      replies,
      time
    });
  });
  return items;
}

export function tabTopics(tab = "all") {
  return Request.getHtml(`${apiDomain}/?tab=${tab}`).then(data => {
    const items = parseHtml(data);
    return items;
  });
}
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
