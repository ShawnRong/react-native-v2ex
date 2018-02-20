import React, { Component } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

import SingleTopic from "../SingleTopic/SingleTopic";

class TopicsList extends Component {
  state = {
    data: [
      {
        id: 431271,
        title:
          "想 DIY 个 NAS，群晖已经把我 3 块硬盘废掉了，现打算自己搞一个，有没有技术大牛帮忙出个方案？",
        url: "http://www.v2ex.com/t/431271",
        content:
          "以前图方便，用的群晖。\r\n群晖确实挺方便，完全傻瓜式设置，也挺稳定，基本不会出现死机重启现象，就是费硬盘，已经把我 3 块硬盘报废了。\r\n最近打算自己搞一个，准备入一块全集成的板子，主板集成 CPU、内存等。然后安装上 linux （目前准备上 centos，因为稳定，也考虑过 freebsd，但对 freebsd 不熟），有没有有经验的大牛帮忙出个方案？",
        content_rendered:
          "以前图方便，用的群晖。\r<br />群晖确实挺方便，完全傻瓜式设置，也挺稳定，基本不会出现死机重启现象，就是费硬盘，已经把我 3 块硬盘报废了。\r<br />最近打算自己搞一个，准备入一块全集成的板子，主板集成 CPU、内存等。然后安装上 linux （目前准备上 centos，因为稳定，也考虑过 freebsd，但对 freebsd 不熟），有没有有经验的大牛帮忙出个方案？",
        replies: 114,
        member: {
          id: 276145,
          username: "yao990",
          tagline: "",
          avatar_mini:
            "//cdn.v2ex.com/avatar/5f23/1340/276145_mini.png?m=1513871705",
          avatar_normal:
            "//cdn.v2ex.com/avatar/5f23/1340/276145_normal.png?m=1513871705",
          avatar_large:
            "//cdn.v2ex.com/avatar/5f23/1340/276145_large.png?m=1513871705"
        },
        node: {
          id: 11,
          name: "linux",
          title: "Linux",
          title_alternative: "Linux",
          url: "http://www.v2ex.com/go/linux",
          topics: 3884,
          avatar_mini:
            "//cdn.v2ex.com/navatar/6512/bd43/11_mini.png?m=1515390139",
          avatar_normal:
            "//cdn.v2ex.com/navatar/6512/bd43/11_normal.png?m=1515390139",
          avatar_large:
            "//cdn.v2ex.com/navatar/6512/bd43/11_large.png?m=1515390139"
        },
        created: 1519050360,
        last_modified: 1519050360,
        last_touched: 1519105715
      },
      {
        id: 431253,
        title: "为什么 20 以内的端口基本上没人使用？",
        url: "http://www.v2ex.com/t/431253",
        content:
          "今天搭服务器，试着把酸酸乳放到了 1 号端口上，结果一切正常。\r\n\r\n```\r\ntcpmux          1/tcp                           # TCP port service multiplexer\r\ntcpmux          1/udp                           # TCP port service multiplexer\r\nrje             5/tcp                           # Remote Job Entry\r\nrje             5/udp                           # Remote Job Entry\r\necho            7/tcp\r\necho            7/udp\r\ndiscard         9/tcp           sink null\r\ndiscard         9/udp           sink null\r\nsystat          11/tcp          users\r\nsystat          11/udp          users\r\ndaytime         13/tcp\r\ndaytime         13/udp\r\nqotd            17/tcp          quote\r\nqotd            17/udp          quote\r\nmsp             18/tcp                          # message send protocol (historic)\r\nmsp             18/udp                          # message send protocol (historic)\r\nchargen         19/tcp          ttytst source\r\nchargen         19/udp          ttytst source\r\nftp-data        20/tcp\r\nftp-data        20/udp\r\n```\r\n然而这激发了我的好奇心，为什么 20 以内的端口基本上没人使用？\r\n\r\n看了下协议列表，这些端口都是有绑定协议的，但是这些协议基本上一个都没看到过，网上的资料也非常少。\r\n\r\n我猜想 20 以内端口绑定的协议是 TCP/IP 协议刚制定时候，测试用的协议？\r\n\r\n大家讨论一下。",
        content_rendered:
          "<p>今天搭服务器，试着把酸酸乳放到了 1 号端口上，结果一切正常。</p>\n<pre><code>tcpmux          1/tcp                           # TCP port service multiplexer\ntcpmux          1/udp                           # TCP port service multiplexer\nrje             5/tcp                           # Remote Job Entry\nrje             5/udp                           # Remote Job Entry\necho            7/tcp\necho            7/udp\ndiscard         9/tcp           sink null\ndiscard         9/udp           sink null\nsystat          11/tcp          users\nsystat          11/udp          users\ndaytime         13/tcp\ndaytime         13/udp\nqotd            17/tcp          quote\nqotd            17/udp          quote\nmsp             18/tcp                          # message send protocol (historic)\nmsp             18/udp                          # message send protocol (historic)\nchargen         19/tcp          ttytst source\nchargen         19/udp          ttytst source\nftp-data        20/tcp\nftp-data        20/udp\n</code></pre>\n<p>然而这激发了我的好奇心，为什么 20 以内的端口基本上没人使用？</p>\n<p>看了下协议列表，这些端口都是有绑定协议的，但是这些协议基本上一个都没看到过，网上的资料也非常少。</p>\n<p>我猜想 20 以内端口绑定的协议是 TCP/IP 协议刚制定时候，测试用的协议？</p>\n<p>大家讨论一下。</p>\n",
        replies: 49,
        member: {
          id: 199281,
          username: "yuzenan888",
          tagline: "",
          avatar_mini:
            "//cdn.v2ex.com/gravatar/c614156db4f3aea2ab132e2b04acab07?s=24&d=retro",
          avatar_normal:
            "//cdn.v2ex.com/gravatar/c614156db4f3aea2ab132e2b04acab07?s=48&d=retro",
          avatar_large:
            "//cdn.v2ex.com/gravatar/c614156db4f3aea2ab132e2b04acab07?s=73&d=retro"
        },
        node: {
          id: 79,
          name: "server",
          title: "服务器",
          title_alternative: "Server",
          url: "http://www.v2ex.com/go/server",
          topics: 1180,
          avatar_mini:
            "//cdn.v2ex.com/navatar/d1fe/173d/79_mini.png?m=1515390375",
          avatar_normal:
            "//cdn.v2ex.com/navatar/d1fe/173d/79_normal.png?m=1515390375",
          avatar_large:
            "//cdn.v2ex.com/navatar/d1fe/173d/79_large.png?m=1515390375"
        },
        created: 1519042814,
        last_modified: 1519042878,
        last_touched: 1519104046
      },
      {
        id: 431254,
        title: "晚上 8:00 京东的师傅还来送货了。",
        url: "http://www.v2ex.com/t/431254",
        content:
          "一线城市夜间配很常见，但是我家在山区的农村，师傅竟然还来送货了，道了声辛苦，请他到家喝杯热水。说压货太多了，得赶紧去配送。在京东的页面给师傅送了几件礼物算是奖励了。\r\n\r\n真的很感慨京东改变了我家的生活。之前一直不敢给父母网购，就是担心售后和物流。家在倒数一线的农村，交通和物流都不是很便利，但是从去年开始京东配送可以是送到村之后，家里的日化、消耗品、工具等等越来越多的东西都在京东买了。\r\n\r\n其实在农村的估计都知道，镇上的东西贵质量还差，假冒伪劣很多。刚开始父母对网购很警惕，感觉会买到假的，但是买了一年他们也习惯让我直接在京东买了，还带动了邻居一起买。\r\n\r\n今晚是京东的自来水了。",
        content_rendered:
          "<p>一线城市夜间配很常见，但是我家在山区的农村，师傅竟然还来送货了，道了声辛苦，请他到家喝杯热水。说压货太多了，得赶紧去配送。在京东的页面给师傅送了几件礼物算是奖励了。</p>\n<p>真的很感慨京东改变了我家的生活。之前一直不敢给父母网购，就是担心售后和物流。家在倒数一线的农村，交通和物流都不是很便利，但是从去年开始京东配送可以是送到村之后，家里的日化、消耗品、工具等等越来越多的东西都在京东买了。</p>\n<p>其实在农村的估计都知道，镇上的东西贵质量还差，假冒伪劣很多。刚开始父母对网购很警惕，感觉会买到假的，但是买了一年他们也习惯让我直接在京东买了，还带动了邻居一起买。</p>\n<p>今晚是京东的自来水了。</p>\n",
        replies: 42,
        member: {
          id: 81369,
          username: "iVeego",
          tagline: "",
          avatar_mini:
            "//cdn.v2ex.com/avatar/b8d1/494e/81369_mini.png?m=1496396364",
          avatar_normal:
            "//cdn.v2ex.com/avatar/b8d1/494e/81369_normal.png?m=1496396364",
          avatar_large:
            "//cdn.v2ex.com/avatar/b8d1/494e/81369_large.png?m=1496396364"
        },
        node: {
          id: 59,
          name: "random",
          title: "随想",
          title_alternative: "Random",
          url: "http://www.v2ex.com/go/random",
          topics: 1806,
          avatar_mini:
            "//cdn.v2ex.com/navatar/093f/65e0/59_mini.png?m=1431019484",
          avatar_normal:
            "//cdn.v2ex.com/navatar/093f/65e0/59_normal.png?m=1431019484",
          avatar_large:
            "//cdn.v2ex.com/navatar/093f/65e0/59_large.png?m=1431019484"
        },
        created: 1519043001,
        last_modified: 1519043001,
        last_touched: 1519103578
      },
      {
        id: 431245,
        title: "计算机专业应届毕业生出来实习的薪水大概是多少，非知名大学",
        url: "http://www.v2ex.com/t/431245",
        content: "",
        content_rendered: "",
        replies: 41,
        member: {
          id: 292045,
          username: "trumpsb",
          tagline: "",
          avatar_mini:
            "//cdn.v2ex.com/gravatar/e78f3893b59512884528d7b94cb69456?s=24&d=retro",
          avatar_normal:
            "//cdn.v2ex.com/gravatar/e78f3893b59512884528d7b94cb69456?s=48&d=retro",
          avatar_large:
            "//cdn.v2ex.com/gravatar/e78f3893b59512884528d7b94cb69456?s=73&d=retro"
        },
        node: {
          id: 300,
          name: "programmer",
          title: "程序员",
          title_alternative: "Programmer",
          url: "http://www.v2ex.com/go/programmer",
          topics: 20003,
          avatar_mini:
            "//cdn.v2ex.com/navatar/94f6/d7e0/300_mini.png?m=1518335450",
          avatar_normal:
            "//cdn.v2ex.com/navatar/94f6/d7e0/300_normal.png?m=1518335450",
          avatar_large:
            "//cdn.v2ex.com/navatar/94f6/d7e0/300_large.png?m=1518335450"
        },
        created: 1519037775,
        last_modified: 1519037775,
        last_touched: 1519105266
      },
      {
        id: 431261,
        title: "用了半年 apple music 又回归 QQ Music 了",
        url: "http://www.v2ex.com/t/431261",
        content:
          "发现一些不太火的小众歌曲，applemusic 还是没有… 还有就是为什么 applemusic 的体验为什么不好好做做呢…",
        content_rendered:
          "发现一些不太火的小众歌曲，applemusic 还是没有… 还有就是为什么 applemusic 的体验为什么不好好做做呢…",
        replies: 39,
        member: {
          id: 18392,
          username: "revival83",
          tagline: "",
          avatar_mini:
            "//cdn.v2ex.com/avatar/2b48/30a2/18392_mini.png?m=1392345536",
          avatar_normal:
            "//cdn.v2ex.com/avatar/2b48/30a2/18392_normal.png?m=1392345536",
          avatar_large:
            "//cdn.v2ex.com/avatar/2b48/30a2/18392_large.png?m=1392345536"
        },
        node: {
          id: 8,
          name: "iphone",
          title: "iPhone",
          title_alternative: "iPhone",
          url: "http://www.v2ex.com/go/iphone",
          topics: 5120,
          avatar_mini:
            "//cdn.v2ex.com/navatar/c9f0/f895/8_mini.png?m=1517229863",
          avatar_normal:
            "//cdn.v2ex.com/navatar/c9f0/f895/8_normal.png?m=1517229863",
          avatar_large:
            "//cdn.v2ex.com/navatar/c9f0/f895/8_large.png?m=1517229863"
        },
        created: 1519045568,
        last_modified: 1519045568,
        last_touched: 1519096177
      },
      {
        id: 431242,
        title: "一个人在 7 岁就决定了性格，继而决定工作和发展方向",
        url: "http://www.v2ex.com/t/431242",
        content: "",
        content_rendered: "",
        replies: 38,
        member: {
          id: 271929,
          username: "peterpei",
          tagline: "",
          avatar_mini:
            "//cdn.v2ex.com/avatar/f095/d9e0/271929_mini.png?m=1518159422",
          avatar_normal:
            "//cdn.v2ex.com/avatar/f095/d9e0/271929_normal.png?m=1518159422",
          avatar_large:
            "//cdn.v2ex.com/avatar/f095/d9e0/271929_large.png?m=1518159422"
        },
        node: {
          id: 59,
          name: "random",
          title: "随想",
          title_alternative: "Random",
          url: "http://www.v2ex.com/go/random",
          topics: 1806,
          avatar_mini:
            "//cdn.v2ex.com/navatar/093f/65e0/59_mini.png?m=1431019484",
          avatar_normal:
            "//cdn.v2ex.com/navatar/093f/65e0/59_normal.png?m=1431019484",
          avatar_large:
            "//cdn.v2ex.com/navatar/093f/65e0/59_large.png?m=1431019484"
        },
        created: 1519034062,
        last_modified: 1519035042,
        last_touched: 1519073417
      },
      {
        id: 431251,
        title: "开发人员如何“write on MacOS, Run in Linux ”？",
        url: "http://www.v2ex.com/t/431251",
        content:
          "1、日常工作习惯了在 MacOS 下使用 VSCODE 做开发，但是产品运行环境是在 CentOS 上，有时候会用 Docker 去做编译，但是有些环境 docker 也胜任不了，就只能搭建虚拟机，开共享文件夹，达到在 macos 上写代码，在虚拟机中去编译运行的效果。。\r\n\r\n2、另外，有时候需要做探索方面的工作，需要装各种各样的环境，如果一直在 macos 上做，也容易导致 macos 越来越臃肿，我想到的办法也是弄虚拟机，虚拟机有快照，弄完了恢复就行。但是装的虚拟机的桌面在 mbpr 上的显示效果都好渣啊。。\r\n\r\n3、以上，有时候会觉得自己是被 macos 的给毒害了，😓。。。。\r\n\r\n除此之外，还有什么其他方法吗？求大佬指教。",
        content_rendered:
          "<p>1、日常工作习惯了在 MacOS 下使用 VSCODE 做开发，但是产品运行环境是在 CentOS 上，有时候会用 Docker 去做编译，但是有些环境 docker 也胜任不了，就只能搭建虚拟机，开共享文件夹，达到在 macos 上写代码，在虚拟机中去编译运行的效果。。</p>\n<p>2、另外，有时候需要做探索方面的工作，需要装各种各样的环境，如果一直在 macos 上做，也容易导致 macos 越来越臃肿，我想到的办法也是弄虚拟机，虚拟机有快照，弄完了恢复就行。但是装的虚拟机的桌面在 mbpr 上的显示效果都好渣啊。。</p>\n<p>3、以上，有时候会觉得自己是被 macos 的给毒害了，😓。。。。</p>\n<p>除此之外，还有什么其他方法吗？求大佬指教。</p>\n",
        replies: 36,
        member: {
          id: 274234,
          username: "billows",
          tagline: "",
          avatar_mini:
            "//cdn.v2ex.com/gravatar/450b9e6f451ead1fd754866f0e441f16?s=24&d=retro",
          avatar_normal:
            "//cdn.v2ex.com/gravatar/450b9e6f451ead1fd754866f0e441f16?s=48&d=retro",
          avatar_large:
            "//cdn.v2ex.com/gravatar/450b9e6f451ead1fd754866f0e441f16?s=73&d=retro"
        },
        node: {
          id: 300,
          name: "programmer",
          title: "程序员",
          title_alternative: "Programmer",
          url: "http://www.v2ex.com/go/programmer",
          topics: 20003,
          avatar_mini:
            "//cdn.v2ex.com/navatar/94f6/d7e0/300_mini.png?m=1518335450",
          avatar_normal:
            "//cdn.v2ex.com/navatar/94f6/d7e0/300_normal.png?m=1518335450",
          avatar_large:
            "//cdn.v2ex.com/navatar/94f6/d7e0/300_large.png?m=1518335450"
        },
        created: 1519042598,
        last_modified: 1519042848,
        last_touched: 1519076795
      },
      {
        id: 431252,
        title: "加钱，世界触手可及",
        url: "http://www.v2ex.com/t/431252",
        content:
          "电信无限卡，放到 iPad 上面 连 新加坡 vultr， 各种稳定，各种快，看 油管 再也不卡了。\r\n\r\n家里的电信宽带做同样的操作，卡得不要不要的。。。。",
        content_rendered:
          "电信无限卡，放到 iPad 上面 连 新加坡 vultr， 各种稳定，各种快，看 油管 再也不卡了。\r<br />\r<br />家里的电信宽带做同样的操作，卡得不要不要的。。。。",
        replies: 33,
        member: {
          id: 199900,
          username: "ericbize",
          tagline: "",
          avatar_mini:
            "//cdn.v2ex.com/avatar/d959/2054/199900_mini.png?m=1494849843",
          avatar_normal:
            "//cdn.v2ex.com/avatar/d959/2054/199900_normal.png?m=1494849843",
          avatar_large:
            "//cdn.v2ex.com/avatar/d959/2054/199900_large.png?m=1494849843"
        },
        node: {
          id: 108,
          name: "bb",
          title: "宽带症候群",
          title_alternative: "Broadband Symptom Complex",
          url: "http://www.v2ex.com/go/bb",
          topics: 4024,
          avatar_mini:
            "//cdn.v2ex.com/navatar/a3c6/5c29/108_mini.png?m=1512975264",
          avatar_normal:
            "//cdn.v2ex.com/navatar/a3c6/5c29/108_normal.png?m=1512975264",
          avatar_large:
            "//cdn.v2ex.com/navatar/a3c6/5c29/108_large.png?m=1512975264"
        },
        created: 1519042637,
        last_modified: 1519042637,
        last_touched: 1519100328
      },
      {
        id: 431288,
        title: "requests get 下来是乱码 咋解决求大佬",
        url: "http://www.v2ex.com/t/431288",
        content:
          "查����U  是这样的乱码  encoding 显示 None utf-8 也没用    有没有什么办法能变显示正常",
        content_rendered:
          "<p>查����U  是这样的乱码  encoding 显示 None utf-8 也没用    有没有什么办法能变显示正常</p>\n",
        replies: 32,
        member: {
          id: 66927,
          username: "jakeyfly",
          tagline: "",
          avatar_mini:
            "//cdn.v2ex.com/gravatar/bcb59cb5e8cf9cb061cded69b2e5300e?s=24&d=retro",
          avatar_normal:
            "//cdn.v2ex.com/gravatar/bcb59cb5e8cf9cb061cded69b2e5300e?s=48&d=retro",
          avatar_large:
            "//cdn.v2ex.com/gravatar/bcb59cb5e8cf9cb061cded69b2e5300e?s=73&d=retro"
        },
        node: {
          id: 12,
          name: "qna",
          title: "问与答",
          title_alternative: "Questions and Answers",
          url: "http://www.v2ex.com/go/qna",
          topics: 103135,
          avatar_mini:
            "//cdn.v2ex.com/navatar/c20a/d4d7/12_mini.png?m=1518335563",
          avatar_normal:
            "//cdn.v2ex.com/navatar/c20a/d4d7/12_normal.png?m=1518335563",
          avatar_large:
            "//cdn.v2ex.com/navatar/c20a/d4d7/12_large.png?m=1518335563"
        },
        created: 1519070489,
        last_modified: 1519070489,
        last_touched: 1519103414
      }
    ]
  };
  render() {
    return (
      <FlatList
        style={styles.topicsContainer}
        data={this.state.data}
        renderItem={topic => {
          return (
            <SingleTopic
              topicTitle={topic.item.title}
              topicAuthor={topic.item.member}
              topicNode={topic.item.node}
              topicReplies={topic.item.replies}
              topicLastModify={topic.item.last_modified}
            />
          );
        }}
      />
    );
  }
}

const styles = StyleSheet.create({
  topicsContainer: {
    width: "100%"
  }
});

export default TopicsList;
