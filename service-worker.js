/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["2020/04/06/QUIC-协议/index.html","fe424bae84c1aa5fd08972012a967b9d"],["2020/04/06/TIME_WAIT 问题解决/index.html","8807551905cfec7c66bd601d73e43535"],["2020/04/18/自建-Nginx-站点部署/index.html","9fc8067549b4b34537bcac37cc6acc65"],["2020/04/25/函数式编程思维/index.html","58e73760f4479a068014a836f124c58c"],["2020/05/02/TLS-详解/index.html","172775a6677a1ff593a55dfd2380ddb0"],["2020/05/04/TLS-详解-二/index.html","6f39de7f6ac4c7e08993857b55235cc8"],["2020/05/30/VMTrafficShark-自制弱网模拟器/index.html","befbb61336f79aee7b1df0e0f68dbc6e"],["2020/05/30/go-etcd-的基本操作/index.html","0c9cf2b4ba777590268f0c03818364fe"],["2020/06/01/性能大杀器epoll/index.html","1a99569387536af32f44707b38635a7a"],["2020/06/13/Git-搜索小技巧/index.html","367afdc1e6ae657bfcf17b0380685996"],["2020/07/11/docker-容器技术基础/index.html","a3da5d401b6fea82ed42423214bd6138"],["2020/07/18/理解协程/index.html","186bc7b89394c45801998b4881d44239"],["2020/07/22/Android-信任自签名证书/index.html","599acd1c55c6ea0458a097f71fe4daea"],["2020/07/24/ubuntu20-04-部署-Kubernetes-k8s/index.html","8542894ca4167b56660195cc0cbdb1da"],["2020/08/22/Kubernetes-Pod/index.html","cc1935a0145d0f97985c30f358253fdd"],["2020/09/20/systemd-基本概念/index.html","ff95aafec7315da18650f2d041dea975"],["2020/09/26/算法-数组/index.html","24fc627d450086ff92b23bc306c06f4e"],["2020/10/17/算法-二叉树/index.html","313a8543d10ac712d38d97d984cb2f68"],["2020/10/24/设计模式（Design-Pattern）/index.html","c0de631739b8645382eaaafb38836191"],["2020/11/07/玩转-tshark-命令行工具/index.html","7cd05af1cd209db5961fee0650e87e3d"],["2020/11/16/基于Nginx实现的RTMP服务/index.html","cfe0cd2571eba6eb0a6e59cc2d6b1a6e"],["2020/11/25/gRPC-Quick-Start/index.html","f3b1f31b5c1019e1efeba13482ad7090"],["2020/12/19/Git-Quick-Start/index.html","42a444a1483996ca23f2ea4a5d00945d"],["2021/01/16/TLS详解（三）/index.html","f9ae02a1ced3193c51c27d2fdd62ad72"],["2021/01/18/Go-Reflect/index.html","ce22e323d92d0d42ba271845a1bc6b9c"],["2021/01/23/探索-Webtransport/index.html","b663e217dc935e12e33fcd74960c757a"],["2021/01/30/GoLang-函数式编程/index.html","744860e907d48029a6960d2426873fa7"],["2021/02/21/HTTP3/index.html","f1371b71bdba9ba91ee6631d57ff5a86"],["2021/03/21/Worker-Pool-in-Golang/index.html","1cd63a4a426789489df068a05a8c5924"],["2021/03/27/搭建我的ELK-7-2/index.html","b5aa13bd25060f122490917113ef4fd8"],["2021/04/29/Go-测试框架-stretchr-testify/index.html","0adc7fbfef9c278bc6e1003857a07925"],["2021/05/29/curl-命令小结/index.html","8819ddc66315612034207bf177a1110f"],["2021/06/05/如何减少TTFB以提高网页页面加载时间/index.html","6f56a5cd2dc7e98bd9babf05ee13f45d"],["2021/06/07/HTTP-2-特性概览/index.html","051ebf6d5de3a0c6ab7e40d1cea788c8"],["2021/07/10/Wireshark解析器Lua脚本/index.html","7edbb660122b1cdcf891c380d7772ee3"],["2021/07/24/QUIC-发生了什么/index.html","b5fcb0f24a3e249d066e70f1533e0025"],["2021/07/31/尝试-Nginx-上使用HTTP3/index.html","e894ddb715b58b97a7c128524c803959"],["2021/08/04/k8s-部署-Nginx-集群/index.html","2b29d7d12fc9b67df98d189a8a91596f"],["2021/08/05/k8s架构拓扑/index.html","4fd49e18859bb0e30c367cf15ffce6b3"],["404.html","fcd98b94a25584afa4ebc2db7ded1c94"],["about/index.html","612e61710cc2354b0f3c3727df472033"],["archives/2020/04/index.html","c0b678b90604b55d697520e884482e3f"],["archives/2020/05/index.html","6fe823899b1e507e21c67a1113da7d4c"],["archives/2020/06/index.html","0d13a92d81e55da3861a707b4717e4e7"],["archives/2020/07/index.html","011f326bd94c364fd844036d27a83e30"],["archives/2020/08/index.html","c62c9bb5f75eda02e959a9a14840faba"],["archives/2020/09/index.html","97e776ed129fd844dc6280d4745aa383"],["archives/2020/10/index.html","8b028909f6f76ce95f1a29535ae2d20a"],["archives/2020/11/index.html","087bbdedae3a900570d6fd65b8db2f3e"],["archives/2020/12/index.html","8d58213a1d71ca4711d97d7aea34a784"],["archives/2020/index.html","a4b7447a9c60634c29a4d8d205a237b6"],["archives/2020/page/2/index.html","800c6601f5476938f1215b84b971b2e9"],["archives/2020/page/3/index.html","1633519f5a09d9d8ea38853a99be1b70"],["archives/2021/01/index.html","e7dc6a8b35177c044948d73d6a32e32c"],["archives/2021/02/index.html","d68b7b8002496cf429427b881d0d81ba"],["archives/2021/03/index.html","560196c0d95c8faa896485d5b3b06a82"],["archives/2021/04/index.html","643a9dc7b67f0583ef03dd3e00efd1fd"],["archives/2021/05/index.html","061c891b111f948959d895a009910f25"],["archives/2021/06/index.html","60faf1fc7cced368f7e7e417998e2aba"],["archives/2021/07/index.html","96efcfdc97aa45d4298557b8c9267473"],["archives/2021/08/index.html","3221f9b4d4ace9e298908a04c83f03b2"],["archives/2021/index.html","558bd218b51e503d70fdb1f7b5e82313"],["archives/2021/page/2/index.html","b56a5d53b4942c87c25c76444f17e4c6"],["archives/index.html","ae03b0147f597fd49a9124a60dcdc317"],["archives/page/2/index.html","1e31c7594cc5e23057b0d357fd3bc424"],["archives/page/3/index.html","9a518ba1a2c0d61cbf8cca885437a356"],["archives/page/4/index.html","9936734efcaaf1ca489b813e1f1f8833"],["assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["categories/Linux/index.html","bc2be554529c6c464fe337d09a8384cb"],["categories/Nginx/index.html","32dd9040a472573745b6d700cfb4b37d"],["categories/QUIC/index.html","bfc0aaacd401b9323fa3506f27e2c1ae"],["categories/algorithm/index.html","637a1d95f4ff1b99f8ddb3397d2eeb51"],["categories/docker/index.html","a7d693961584538914c6b74ae25fb76b"],["categories/etcd/index.html","2bf1ecb8b69e2d9ceeb7936f61191e50"],["categories/git/index.html","df7fa6a67e808c02fc7ce7429771ae2b"],["categories/index.html","3be5fc21f1cbad35e9b31da2b3cbbb2b"],["categories/k8s/index.html","d71741f0b81bcebd13316c74c946727e"],["categories/network/index.html","0497093d83a05633b8f8582b56d935e9"],["categories/network/page/2/index.html","027a238697f086c94dab3b99879d299d"],["categories/programming/index.html","0b2a647a193fd1a9a909b649197cc85a"],["categories/运维/index.html","b9fef27b21d13699e0ba752c6f08d59a"],["css/404.css","b1bb50e1fabe41adcec483f6427fb3aa"],["css/index.css","5a2c720aa55e35eb27c8b8a0306c5f02"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["express/index.html","3236e83e5bc46694443f06159ea865aa"],["images/coroutines/coroutine_stack.png","e23240a5194471d67a90f97f81972f74"],["images/coroutines/goroutine_NonPreemptive.png","c6d7ed912a4b7ff4c8cc87cdd0f64913"],["images/coroutines/goroutine_dispatch.png","35d07b05c1b17dd7f9b04abf1faefa84"],["images/docker/aufs_image.png","0903c411c111b2ab4fea7bddcd847604"],["images/docker/cgroups.png","6830e1ce386d12c92ce18fbe615d7efb"],["images/docker/cgroups_docker.png","5254b3b1488b47f89b1250fead32d0db"],["images/docker/docker-cgroups.jpg","82722ce557f5accb3ca4cd9ab8cf94ae"],["images/docker/docker_namespace.png","cdd6cd6b13b4078030681656e98f8a4b"],["images/etcd/etcd.png","c6c02a686233012a749cc4f0bcd81ba9"],["images/etcd/raft_a_consensus_algorithm_for_replicated_logs_1440-21.jpg","0df643d5cfb68ecaac1031275c2a7d3c"],["images/git/advance_search.png","35147a82959c82b4f472ad70764d7c71"],["images/git/branches.png","2c14dd73e26e16189ff796a876841bac"],["images/git/git.png","d00f9e93c972af6182082d7236b4f910"],["images/git/git_commit_tree_blob.png","ef7bc30d35466f4037e9fd821d6e7efe"],["images/git/github_develop.png","884c0f1eff4ba87ef015d9278ae0b8c5"],["images/git/github_feature.png","2a1e21da7d19e5f29ff88b0a23b1e2f1"],["images/git/github_marketplace.png","4915a4ec05746798472a0c8bc58df899"],["images/git/search_date.png","01ae4e9160fab9f1eb4c301a64f3c87c"],["images/git/search_readme.png","c729506900d7c2e2053a9fce900e66d0"],["images/k8s/k8s.png","6efb359baac4e017f1cd5697f4d5eaef"],["images/k8s/k8s_dashboard.png","9fe264d9539dcefef22e0639c5314d73"],["images/k8s/k8s_infra.png","8c016391b4b17923f38547c498e434cf"],["images/k8s/k8s_infra1.png","154bb99796a3792c61331d4fa3bfb1b8"],["images/leetcode/tree_1.jpg","ab103822e75b5b15c615b68560cb2416"],["images/live/live.jpg","8d587b0774eaa3809d00136391bcad00"],["images/network/AndroidRoot/android_root.png","596677b0098792ca5fbd3cbf758752dc"],["images/network/AndroidRoot/cert_fqdn.png","3fa2ca2f44d362aaa1ed44f965c354e5"],["images/network/AndroidRoot/cert_san.png","2597f03a4e1e26d9cc270cb573efee9c"],["images/network/AndroidRoot/cert_sign.png","afbc1a3fb253bab38c900a973d81125c"],["images/network/HTTP2/binary-protocols-2.png","d058ffece9d16d18bf9f4a544abf381a"],["images/network/HTTP2/http-requests.png","34236ac646d59d85c845c10652ee7619"],["images/network/HTTP2/http-timeline.png","55290b645accaa405949238e30dcfb63"],["images/network/HTTP2/http2-hpack-compression.png","990e7b56853f517a7e3b9ea496606c62"],["images/network/HTTP2/http2-push.png","174c9854f8c40f84c13565afff7574b4"],["images/network/HTTP2/http2-streams.png","cf632d55f86ece1514a336b4b8ac6203"],["images/network/HTTP2/http2-weight.png","5b86b53561b7d78005f5df380156602a"],["images/network/QUIC/ack_delay.jpg","13cc900f346ed607cbbfaf30466a0032"],["images/network/QUIC/gquic-stack.png","a045101397b293777a61ad1986dd89bc"],["images/network/QUIC/quic_0rtt.gif","95f5c7e411d0b7f96d182abe284be551"],["images/network/QUIC/quic_frame.png","6bace45b16daa252110f97731880707a"],["images/network/QUIC/quic_frame_stream.png","10874d334349349559835ad4d4c92b4c"],["images/network/QUIC/quic_frame_type.png","ce94525f7b3e794a8f2957ed9f8c5699"],["images/network/QUIC/quic_http3.png","12b117914de00014f90d1adf12875861"],["images/network/QUIC/quic_layer.png","ab3283383013b707d1420b6b4cb8517c"],["images/network/QUIC/quic_longpacket.png","5ecc19ba9106179cd3443eefc1d6b8b4"],["images/network/QUIC/quic_longpacket_pcap.png","0b87ff18e08796de55b6768925eb2ca2"],["images/network/QUIC/quic_rt.jpg","bf74dace58c25b2f3a532c729861ff63"],["images/network/QUIC/quic_shortpacket.png","f41634797dfafead4535c3e94ea5f226"],["images/network/QUIC/quic_shortpacket_pcap.png","8a90e2885273a9629657ccd1372dba3e"],["images/network/QUIC/quic_stream_id.png","ae1dbf30467e8a7684d337701f055c0a"],["images/network/QUIC/tcp_rt.jpg","e3d5ec9e207f1c0118767aaa9d34a528"],["images/network/QUIC/tls_record.png","eab243d407a010363231982de34acb38"],["images/network/TLSDetailAnalysis/AES_Encrpyt.png","ba1b2fddc59677427901d9b9a1b2961d"],["images/network/TLSDetailAnalysis/CBC_encryption.png","9e2b40f677d4261dce2d36e2d9c1ae32"],["images/network/TLSDetailAnalysis/CTR_encryption.svg","4d9317e0640a84dba1dc08ad8adc3d8a"],["images/network/TLSDetailAnalysis/Certificate.png","91047079e7e3c37cbc850a7917139e9f"],["images/network/TLSDetailAnalysis/Diffie-Hellman.png","7ab7e4852ac78249fea33e918e6e1ab8"],["images/network/TLSDetailAnalysis/ECB.jpg","fc5ab2e7455550438442751116ba11b3"],["images/network/TLSDetailAnalysis/ECB_encryption.png","4a4607b52607a19d9b977c12c0185ba5"],["images/network/TLSDetailAnalysis/ECDHE.png","bf2cda1f351c70dd3cf3a9f277de4f1d"],["images/network/TLSDetailAnalysis/Message_Authentication_Code.png","10811ef913f94962eb5a749ec49a7c0c"],["images/network/TLSDetailAnalysis/TLS.png","23869e7f4147bbd8782c8501b2aa6dc4"],["images/network/TLSDetailAnalysis/XOR.png","5b2b73658c9f47effcf4712512917ca4"],["images/network/TLSDetailAnalysis/change_cipher_space.png","b7d3eb4a548960d4b84b67bf76b6870c"],["images/network/TLSDetailAnalysis/client_hello.png","f5f10b8c0f3c27cff477834a59be487b"],["images/network/TLSDetailAnalysis/client_key_exchange.png","7e7bb35439cc2acb3fdb2e07ef455b4b"],["images/network/TLSDetailAnalysis/encript-for-security.jpg","78523a1153253699a9f0b48efad40f4f"],["images/network/TLSDetailAnalysis/ocsp.png","5c3f7b4b05ea9777c89b11de8f2a7809"],["images/network/TLSDetailAnalysis/server_hello.png","ae5b11007207393fa356d7534b105d8c"],["images/network/TLSDetailAnalysis/server_hello_down.png","dd4026f13a1e5c0835995661fa7d8994"],["images/network/TLSDetailAnalysis/server_key_exchange.png","d607a51297f87ebc17d7d91e64aaf081"],["images/network/TLSDetailAnalysis/ssl_handshake_diffie_hellman.jpg","ac1ab9de94d13ba67764aef2a6046f47"],["images/network/TLSDetailAnalysis/ssl_handshake_rsa.jpg","0c8452265ea781fa01b487dd7f6e3adc"],["images/network/TLSDetailAnalysis/tcp_tls.png","0c0147ab6adb6991df744cf6329d6138"],["images/network/TLSDetailAnalysis/tls-1.3-handshake-clienthello.png","8d6df70c1bc0aac7b5e6f2249ff75bb5"],["images/network/TLSDetailAnalysis/tls-1.3-handshake-performance.png","dc3c96f49b774d32cf904ebf4197b043"],["images/network/TLSDetailAnalysis/tls-1.3-handshake-serverhello.png","d1a4bdd94afcdd115aebc0f8262947ef"],["images/network/TLSDetailAnalysis/tls-1.3-pre_shared_key.png","5e225314e781808cecbec4a7dc4b83e6"],["images/network/TLSDetailAnalysis/tls-1.3-psk_key_exchange_modes.png","d7be813b698c0119d784a7c83554e108"],["images/network/TLSDetailAnalysis/tls-1.3.png","d1b7a5f94c27c4c2ace9e0f2d32ff59a"],["images/network/TLSDetailAnalysis/tls_ciphersuite.png","7929f876fc662bde70578e6680b110d0"],["images/network/TLSDetailAnalysis/two-parts-of-gcm-l.jpg","cd0100f6a0eaa09d2aadf53e411bf1cd"],["images/network/VMTrafficShark/eth1.png","10b833dd952024bcec8da0774647d44b"],["images/network/VMTrafficShark/mitmproxy.png","f242362b0aacfcdc555aebf7c739d697"],["images/network/VMTrafficShark/net_interface_usb.png","0ae5c086452c9ca90654449b438678c3"],["images/network/VMTrafficShark/netinterface_driver_install.png","7d22333d78006c503c67af15cdff824c"],["images/network/VMTrafficShark/traffic_test.png","1798e19828d15c870f1d276cd81005fa"],["images/network/VMTrafficShark/vmtrafficshark.png","8215e680c8a3b38b8828cb5673e5e311"],["images/network/VMTrafficShark/wifi.png","36109cec7fdb8f4b70eae3dc2dd2f064"],["images/network/WebTransport/common_transport_requirements.png","d109983d0d9c0db046ad4e8540736d1a"],["images/network/WebTransport/qvis.png","f45dedf1f5d8ea3ab2db8fc67253028d"],["images/network/WebTransport/webtransport_client.png","0a419dadecdf339b9258e7e535a9fc4d"],["images/network/WebTransport/wq-vvv-01_alpn.png","de6686260dc69f13a982620a9efea860"],["images/network/epoll/Nginx.png","8f67e40a56dbfc3cc56bde911c043514"],["images/network/epoll/c10k.jpg","4f9a6125fe71aee973079f944eb37fc4"],["images/network/epoll/epoll_API.png","0e02437faa4f13b15fdbc46c5627c21d"],["images/network/epoll/io.png","96c1a438bc84baabcddc0e45697e1f67"],["images/network/epoll/libevent-benchmark2.jpg","1eab86b7aa51eb976c9f1738cd94e594"],["images/network/gRPC/grpc_concept_diagram.png","4cbf0f8158276383fc408fedfb242bce"],["images/network/gRPC/grpc_v1.png","e82f3dc48a6cd2829e471e46f180a13e"],["images/network/gRPC/grpc_v2.png","4388d3cf40e8eb513277cc58374bbd20"],["images/systemd/systemd.png","b8bfdcba19ee3ae6a63c25680f2c9043"],["images/systemd/systemd_components2.png","98ddb4023999e074a2e92b01a044f134"],["images/tshark/pcap_file_format.png","401e224372f15d1ae3ce50fe557e3039"],["images/tshark/tshark_capture.png","e815baa99ddfd0eceb64fc34415fcc67"],["images/tshark/tshark_conv.png","7b13a40db44c91033be4af208fbdf40f"],["images/tshark/tshark_o.png","2a824abe5bab11858d5c35346dbe5bbe"],["images/tshark/tshark_throughput.png","c462386c90990f8228fe81901823a216"],["images/tshark/tshark_z.png","2e9ea2a03695b7f138641cf741aeef33"],["images/tshark/wireshark_throughput.png","97c41676877ff24fdc009392c6774d4f"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/avatar.jpg","61ea0eed7ab70f213815f633a25e61f3"],["img/avatar.png","6cc4a809d23e3d8946a299ae4ce4e4cd"],["img/background_1.jpg","02ff00c5e8681bd8c7e2e07a799fd881"],["img/background_2.jpg","7c4c58794916322a1b4dd1d67b7d502f"],["img/background_3.jpg","570092523001e0f3ddbe1b8cfb126b76"],["img/background_4.jpg","08fe86f81d4953846371b25c1a2ec13b"],["img/favicon-16x16-dragon.png","c39e3ab111a2707d2111f73177cce583"],["index.html","5dd031a54121f1bbda83b26b52f27109"],["js/copy.js","45aae54bf2e43ac27ecc41eb5e0bacf7"],["js/fancybox.js","f84d626654b9bbc05720952b3effe062"],["js/fireworks.js","35933ce61c158ef9c33b5e089fe757ac"],["js/head.js","347edd99f8e3921b45fa617e839d8182"],["js/hexo-theme-melody.js","d41d8cd98f00b204e9800998ecf8427e"],["js/katex.js","d971ba8b8dee1120ef66744b89cfd2b1"],["js/scroll.js","603fa932f3ec986228c2136a51a14f94"],["js/search/algolia.js","53160985d32d6fd66d98aa0e05b081ac"],["js/search/local-search.js","1565b508bd866ed6fbd724a3858af5d8"],["js/sidebar.js","d24db780974e661198eeb2e45f20a28f"],["js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["js/third-party/canvas-ribbon.js","09c181544ddff1db701db02ac30453e0"],["js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["js/third-party/reveal/head.min.js","aad121203010122e05f1766d92385214"],["js/third-party/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["js/third-party/velocity.ui.min.js","c8ca438424a080620f7b2f4ee4b0fff1"],["js/transition.js","911db4268f0f6621073afcced9e1bfef"],["js/utils.js","3ff3423d966a1c351e9867813b3f6d36"],["page/2/index.html","752fa17a98a5b9a4e885336ec2cc39b3"],["page/3/index.html","3c170ed4d3aeaa8a7721ea258432eaa4"],["page/4/index.html","6b510becee3a8dfd186a4a93236add8a"],["static/images/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["static/images/avatar.jpg","61ea0eed7ab70f213815f633a25e61f3"],["static/images/avatar.png","6cc4a809d23e3d8946a299ae4ce4e4cd"],["static/images/backgroud.jpg","895b15c0992b7b39fcf8c49f5f945382"],["static/images/backgroud_dq.jpg","fb497c6d568cfe58a81f7f95c5460ea6"],["static/images/backgroud_sbpk.jpg","d8168e91766d0292f69919525c8e72b7"],["static/images/background_mac.jpg","bfe60a62c6e9807ec6aacfdfebaf0400"],["static/images/coroutines/coroutine_stack.png","e23240a5194471d67a90f97f81972f74"],["static/images/coroutines/goroutine_NonPreemptive.png","c6d7ed912a4b7ff4c8cc87cdd0f64913"],["static/images/coroutines/goroutine_dispatch.png","35d07b05c1b17dd7f9b04abf1faefa84"],["static/images/docker/aufs_image.png","0903c411c111b2ab4fea7bddcd847604"],["static/images/docker/cgroups.png","6830e1ce386d12c92ce18fbe615d7efb"],["static/images/docker/cgroups_docker.png","5254b3b1488b47f89b1250fead32d0db"],["static/images/docker/docker-cgroups.jpg","82722ce557f5accb3ca4cd9ab8cf94ae"],["static/images/docker/docker_hub.png","eb44ef4fc50fa60fdd482ce03ece7f8c"],["static/images/docker/docker_namespace.png","cdd6cd6b13b4078030681656e98f8a4b"],["static/images/elk/cerebro.png","0449b5bc407086ddbaf3861ac9b8ad91"],["static/images/elk/elk.png","7109725ccabf19e3e198d8fa4dce285c"],["static/images/elk/kinana_home.png","485eb56b6d841fd1847d6a6e3b953f8e"],["static/images/etcd/etcd.png","c6c02a686233012a749cc4f0bcd81ba9"],["static/images/etcd/raft_a_consensus_algorithm_for_replicated_logs_1440-21.jpg","0df643d5cfb68ecaac1031275c2a7d3c"],["static/images/favicon-16x16-dragon.png","c39e3ab111a2707d2111f73177cce583"],["static/images/git/advance_search.png","35147a82959c82b4f472ad70764d7c71"],["static/images/git/branches.png","2c14dd73e26e16189ff796a876841bac"],["static/images/git/git.png","d00f9e93c972af6182082d7236b4f910"],["static/images/git/git_commit_tree_blob.png","ef7bc30d35466f4037e9fd821d6e7efe"],["static/images/git/github_develop.png","884c0f1eff4ba87ef015d9278ae0b8c5"],["static/images/git/github_feature.png","2a1e21da7d19e5f29ff88b0a23b1e2f1"],["static/images/git/github_marketplace.png","4915a4ec05746798472a0c8bc58df899"],["static/images/git/search_date.png","01ae4e9160fab9f1eb4c301a64f3c87c"],["static/images/git/search_readme.png","c729506900d7c2e2053a9fce900e66d0"],["static/images/k8s/k8s.png","6efb359baac4e017f1cd5697f4d5eaef"],["static/images/k8s/k8s_dashboard.png","9fe264d9539dcefef22e0639c5314d73"],["static/images/k8s/k8s_infra.png","8c016391b4b17923f38547c498e434cf"],["static/images/k8s/k8s_infra1.png","154bb99796a3792c61331d4fa3bfb1b8"],["static/images/k8s/k8s_nginx_deploy.png","14a799332d5aeb00f31059812a4e07bc"],["static/images/k8s/service_nodeport.png","260023ad3a904536c891f4ec1f087161"],["static/images/k8s/service_nodeport_1.png","18b77bd92b09b4838457c8ea300f7e00"],["static/images/k8s/structure/k8s_cluster_1.png","ccc0f2c8877877a61c4322c7dbcfdf29"],["static/images/k8s/structure/k8s_network_cni0.jpg","dc1c86f8156c66bbdd59d564761b9bfd"],["static/images/k8s/structure/k8s_network_cni0_1.png","91bc201274afe76156efc5a358dcf447"],["static/images/k8s/structure/k8s_network_flannel.png","e04c5bb9cbfb6aeabe5ba0b929af6095"],["static/images/k8s/structure/k8s_network_vxlan.png","8c7686813aec5bd642542669412b4e22"],["static/images/k8s/structure/k8s_struct.png","2e22dde56a1cf869b3fa38dc43c38111"],["static/images/leetcode/tree_1.jpg","ab103822e75b5b15c615b68560cb2416"],["static/images/live/live.jpg","8d587b0774eaa3809d00136391bcad00"],["static/images/network/AndroidRoot/android_root.png","596677b0098792ca5fbd3cbf758752dc"],["static/images/network/AndroidRoot/cert_fqdn.png","3fa2ca2f44d362aaa1ed44f965c354e5"],["static/images/network/AndroidRoot/cert_san.png","2597f03a4e1e26d9cc270cb573efee9c"],["static/images/network/AndroidRoot/cert_sign.png","afbc1a3fb253bab38c900a973d81125c"],["static/images/network/HTTP2/binary-protocols-2.png","d058ffece9d16d18bf9f4a544abf381a"],["static/images/network/HTTP2/h2load.png","788b51b02497a52d367a17579a6a973c"],["static/images/network/HTTP2/http-requests.png","34236ac646d59d85c845c10652ee7619"],["static/images/network/HTTP2/http-timeline.png","55290b645accaa405949238e30dcfb63"],["static/images/network/HTTP2/http2-hpack-compression.png","990e7b56853f517a7e3b9ea496606c62"],["static/images/network/HTTP2/http2-hpack-table.png","3a14f0bb91f60b2628f03e2da872a3b8"],["static/images/network/HTTP2/http2-hpack1.png","a1df88f66923f4ce244e675e8e4862f6"],["static/images/network/HTTP2/http2-hpack2.png","9434af72174457cdd15f2e680db8bf68"],["static/images/network/HTTP2/http2-hpack3.png","623f394ebc756107f28ddf4f6791c6f8"],["static/images/network/HTTP2/http2-push.png","174c9854f8c40f84c13565afff7574b4"],["static/images/network/HTTP2/http2-serverpush.png","0d72e14176694aba7a4e0c4552a635a9"],["static/images/network/HTTP2/http2-streams.png","cf632d55f86ece1514a336b4b8ac6203"],["static/images/network/HTTP2/http2-weight.png","5b86b53561b7d78005f5df380156602a"],["static/images/network/HTTP2/huffman_tree.png","575e458ed1af80b9c9bfbc7bbe5cd383"],["static/images/network/QUIC/ack_delay.jpg","13cc900f346ed607cbbfaf30466a0032"],["static/images/network/QUIC/gquic-stack.png","a045101397b293777a61ad1986dd89bc"],["static/images/network/QUIC/http1_refactor.png","4dc433e0baf58cd12ff07f876d40f8c8"],["static/images/network/QUIC/http_protocol_versions.png","9d41178419362891616113c5faf92e55"],["static/images/network/QUIC/qpack.png","e7a55dcd5eecc8986ce35e283ae3cb84"],["static/images/network/QUIC/quic_0rtt.gif","95f5c7e411d0b7f96d182abe284be551"],["static/images/network/QUIC/quic_0rtt.png","5a9e72e791e175b86d95410077720e00"],["static/images/network/QUIC/quic_1rtt.png","2086baa9dc8617580483fa1c95dbf5df"],["static/images/network/QUIC/quic_adoption.png","b22ff6f1b847fe0f6d66893f5202d490"],["static/images/network/QUIC/quic_capture_handshake.png","ec75aff3c598f9889a5420223dfb985d"],["static/images/network/QUIC/quic_connection_id.png","e7c88213ac21d7ad9eeeb18e1d85699d"],["static/images/network/QUIC/quic_frame1.png","22499018ab769a31a2987c97391d373b"],["static/images/network/QUIC/quic_frame_stream.png","10874d334349349559835ad4d4c92b4c"],["static/images/network/QUIC/quic_frame_type.png","ce94525f7b3e794a8f2957ed9f8c5699"],["static/images/network/QUIC/quic_http3.png","12b117914de00014f90d1adf12875861"],["static/images/network/QUIC/quic_http3_check.png","89351ecf7a086c443760a4504d0fecf4"],["static/images/network/QUIC/quic_interop.png","af95112e2ec79c658493772490a68cf7"],["static/images/network/QUIC/quic_layer.png","ab3283383013b707d1420b6b4cb8517c"],["static/images/network/QUIC/quic_longpacket.png","5ecc19ba9106179cd3443eefc1d6b8b4"],["static/images/network/QUIC/quic_longpacket_pcap.png","0b87ff18e08796de55b6768925eb2ca2"],["static/images/network/QUIC/quic_rt.jpg","bf74dace58c25b2f3a532c729861ff63"],["static/images/network/QUIC/quic_shortpacket.png","f41634797dfafead4535c3e94ea5f226"],["static/images/network/QUIC/quic_shortpacket_pcap.png","8a90e2885273a9629657ccd1372dba3e"],["static/images/network/QUIC/quic_stream_frame.png","7906f6515d0e6ccfc6a14b420a75452c"],["static/images/network/QUIC/quic_stream_id.png","ae1dbf30467e8a7684d337701f055c0a"],["static/images/network/QUIC/quic_stream_type.png","f3b61a02f819c85501371b3415eb16f2"],["static/images/network/QUIC/quic_struct.png","10b20ca23f1c3eecc48d8e4b56779b03"],["static/images/network/QUIC/quic_version.png","dad24319f7bff129f38e0b952c17cb51"],["static/images/network/QUIC/qvis_quictools_info.png","4705c45f1da5651d10c9436335a43ea1"],["static/images/network/QUIC/tcp_rt.jpg","e3d5ec9e207f1c0118767aaa9d34a528"],["static/images/network/QUIC/tls_record.png","eab243d407a010363231982de34acb38"],["static/images/network/TLSDetailAnalysis/AES_Encrpyt.png","ba1b2fddc59677427901d9b9a1b2961d"],["static/images/network/TLSDetailAnalysis/CBC_encryption.png","9e2b40f677d4261dce2d36e2d9c1ae32"],["static/images/network/TLSDetailAnalysis/CTR_encryption.svg","4d9317e0640a84dba1dc08ad8adc3d8a"],["static/images/network/TLSDetailAnalysis/Certificate.png","91047079e7e3c37cbc850a7917139e9f"],["static/images/network/TLSDetailAnalysis/Diffie-Hellman.png","7ab7e4852ac78249fea33e918e6e1ab8"],["static/images/network/TLSDetailAnalysis/ECB.jpg","fc5ab2e7455550438442751116ba11b3"],["static/images/network/TLSDetailAnalysis/ECB_encryption.png","4a4607b52607a19d9b977c12c0185ba5"],["static/images/network/TLSDetailAnalysis/ECDHE.png","bf2cda1f351c70dd3cf3a9f277de4f1d"],["static/images/network/TLSDetailAnalysis/Message_Authentication_Code.png","10811ef913f94962eb5a749ec49a7c0c"],["static/images/network/TLSDetailAnalysis/TLS.png","23869e7f4147bbd8782c8501b2aa6dc4"],["static/images/network/TLSDetailAnalysis/XOR.png","5b2b73658c9f47effcf4712512917ca4"],["static/images/network/TLSDetailAnalysis/change_cipher_space.png","b7d3eb4a548960d4b84b67bf76b6870c"],["static/images/network/TLSDetailAnalysis/client_hello.png","f5f10b8c0f3c27cff477834a59be487b"],["static/images/network/TLSDetailAnalysis/client_key_exchange.png","7e7bb35439cc2acb3fdb2e07ef455b4b"],["static/images/network/TLSDetailAnalysis/encript-for-security.jpg","78523a1153253699a9f0b48efad40f4f"],["static/images/network/TLSDetailAnalysis/ocsp.png","5c3f7b4b05ea9777c89b11de8f2a7809"],["static/images/network/TLSDetailAnalysis/server_hello.png","ae5b11007207393fa356d7534b105d8c"],["static/images/network/TLSDetailAnalysis/server_hello_down.png","dd4026f13a1e5c0835995661fa7d8994"],["static/images/network/TLSDetailAnalysis/server_key_exchange.png","d607a51297f87ebc17d7d91e64aaf081"],["static/images/network/TLSDetailAnalysis/ssl_handshake_diffie_hellman.jpg","ac1ab9de94d13ba67764aef2a6046f47"],["static/images/network/TLSDetailAnalysis/ssl_handshake_rsa.jpg","0c8452265ea781fa01b487dd7f6e3adc"],["static/images/network/TLSDetailAnalysis/tcp_tls.png","0c0147ab6adb6991df744cf6329d6138"],["static/images/network/TLSDetailAnalysis/tls-1.3-handshake-clienthello.png","8d6df70c1bc0aac7b5e6f2249ff75bb5"],["static/images/network/TLSDetailAnalysis/tls-1.3-handshake-performance.png","dc3c96f49b774d32cf904ebf4197b043"],["static/images/network/TLSDetailAnalysis/tls-1.3-handshake-serverhello.png","d1a4bdd94afcdd115aebc0f8262947ef"],["static/images/network/TLSDetailAnalysis/tls-1.3-pre_shared_key.png","5e225314e781808cecbec4a7dc4b83e6"],["static/images/network/TLSDetailAnalysis/tls-1.3-psk_key_exchange_modes.png","d7be813b698c0119d784a7c83554e108"],["static/images/network/TLSDetailAnalysis/tls-1.3.png","d1b7a5f94c27c4c2ace9e0f2d32ff59a"],["static/images/network/TLSDetailAnalysis/tls_ciphersuite.png","7929f876fc662bde70578e6680b110d0"],["static/images/network/TLSDetailAnalysis/two-parts-of-gcm-l.jpg","cd0100f6a0eaa09d2aadf53e411bf1cd"],["static/images/network/VMTrafficShark/eth1.png","10b833dd952024bcec8da0774647d44b"],["static/images/network/VMTrafficShark/mitmproxy.png","f242362b0aacfcdc555aebf7c739d697"],["static/images/network/VMTrafficShark/net_interface_usb.png","0ae5c086452c9ca90654449b438678c3"],["static/images/network/VMTrafficShark/netinterface_driver_install.png","7d22333d78006c503c67af15cdff824c"],["static/images/network/VMTrafficShark/traffic_test.png","1798e19828d15c870f1d276cd81005fa"],["static/images/network/VMTrafficShark/vmtrafficshark.png","8215e680c8a3b38b8828cb5673e5e311"],["static/images/network/VMTrafficShark/wifi.png","36109cec7fdb8f4b70eae3dc2dd2f064"],["static/images/network/WebTransport/common_transport_requirements.png","d109983d0d9c0db046ad4e8540736d1a"],["static/images/network/WebTransport/qvis.png","f45dedf1f5d8ea3ab2db8fc67253028d"],["static/images/network/WebTransport/webtransport_client.png","0a419dadecdf339b9258e7e535a9fc4d"],["static/images/network/WebTransport/wq-vvv-01_alpn.png","de6686260dc69f13a982620a9efea860"],["static/images/network/curl/curl-command.png","442b15eaf2987c2b1f29af835d5792c3"],["static/images/network/epoll/Nginx.png","8f67e40a56dbfc3cc56bde911c043514"],["static/images/network/epoll/c10k.jpg","4f9a6125fe71aee973079f944eb37fc4"],["static/images/network/epoll/epoll_API.png","0e02437faa4f13b15fdbc46c5627c21d"],["static/images/network/epoll/io.png","96c1a438bc84baabcddc0e45697e1f67"],["static/images/network/epoll/libevent-benchmark2.jpg","1eab86b7aa51eb976c9f1738cd94e594"],["static/images/network/gRPC/grpc_concept_diagram.png","4cbf0f8158276383fc408fedfb242bce"],["static/images/network/gRPC/grpc_v1.png","e82f3dc48a6cd2829e471e46f180a13e"],["static/images/network/gRPC/grpc_v2.png","4388d3cf40e8eb513277cc58374bbd20"],["static/images/network/performance/geekflare.png","a5933d71bf4a071ff98831b7ab542671"],["static/images/network/performance/google-analytics-ttfb.jpg","a2bb1756bfed1a938bae52f4cbbd29cb"],["static/images/network/performance/google-chrome-devtools-ttfb.jpg","0504b87a384fce6acc84a02d74ae2ce3"],["static/images/network/performance/gtmetrix-waiting.png","b82fa67f90655f8aecaac83dcffb403d"],["static/images/network/performance/keycdn-ttfb-test.jpg","3e1d058acbac0de78da4180c451aa2ae"],["static/images/network/performance/ttfb.png","d0400d1031c0f7c94d7dc53c184c8171"],["static/images/network/performance/wait-time-pingdom.jpg","f6c2beb6f9506fff74223efd9bf8a341"],["static/images/network/performance/waiting-ttfb.jpg","14018e19bc48bc0e866ece9552e9e3e3"],["static/images/network/performance/webpagetest-ttfb.jpg","da7e17a301f5a19c3b3f13b28911c866"],["static/images/systemd/systemd.png","b8bfdcba19ee3ae6a63c25680f2c9043"],["static/images/systemd/systemd_components2.png","98ddb4023999e074a2e92b01a044f134"],["static/images/tshark/pcap_file_format.png","401e224372f15d1ae3ce50fe557e3039"],["static/images/tshark/tshark_capture.png","e815baa99ddfd0eceb64fc34415fcc67"],["static/images/tshark/tshark_conv.png","7b13a40db44c91033be4af208fbdf40f"],["static/images/tshark/tshark_expert.png","b8a2c75f4caa1e67b76ec131e2b31072"],["static/images/tshark/tshark_o.png","2a824abe5bab11858d5c35346dbe5bbe"],["static/images/tshark/tshark_throughput.png","c462386c90990f8228fe81901823a216"],["static/images/tshark/tshark_z.png","2e9ea2a03695b7f138641cf741aeef33"],["static/images/tshark/wireshark_throughput.png","97c41676877ff24fdc009392c6774d4f"],["static/images/wireshark/init_lua.png","b08470a9f57537486b6112e50b21bd03"],["static/images/wireshark/lua_api_fields.png","33b75cedc301ab91a30354693ad204ef"],["static/images/wireshark/lua_api_pinfo.png","3c5eb533d3063598614b07c6edba14a3"],["static/images/wireshark/lua_api_treeitem.png","4c1c6baf15cf70f8eaee27aae78cd414"],["static/images/wireshark/proto_field.png","46e4f262c49172520891e19d4c16f948"],["static/images/wireshark/proto_field_tcp.png","7884fc6deece800257f77162317d2897"],["static/js/copy.js","3dc9bf0e996951b30e4aadfdfaea9d89"],["static/js/fancybox.js","ff64f9666eec84cfe6b8f391eecdd99f"],["static/js/fireworks.js","ec740072a351996c3cd0d88015bd5e71"],["static/js/head.js","5767a0ef4721d67268a40c2fadc58aba"],["static/js/hexo-theme-melody.js","b345454780458cafb4adea2c495cb978"],["static/js/katex.js","f5a956d2fc63e9f2b6c85599b788e728"],["static/js/scroll.js","dc5fe750f58e40588bf6a24e5f445d1c"],["static/js/search/algolia.js","55ed22510edb986da9302c10c4983fb0"],["static/js/search/local-search.js","4d4eb1ffe1643bfcd1ac05e0870636b4"],["static/js/sidebar.js","eb3d2ce4ba456939d3d064d4c2192e9e"],["static/js/third-party/anime.min.js","d39595bb9a837eeba0420fba4a12c880"],["static/js/third-party/canvas-ribbon.js","71291dda61199bd8ff1907c1726307e7"],["static/js/third-party/jquery.fancybox.min.js","864e44ef1315581d69146044425bdc37"],["static/js/third-party/jquery.min.js","b0269d0296184337181e0c4a0a97f947"],["static/js/third-party/reveal/head.min.js","952ff827b5935a64f3747272174e7a9b"],["static/js/third-party/velocity.min.js","4bb4fe82ae81f0b9aff980b261e19e08"],["static/js/third-party/velocity.ui.min.js","f534fe65720e91dcd25be5cc0005ce25"],["static/js/transition.js","4b3a4d9eb258df67fc80755f2ec56443"],["static/js/utils.js","8b77d23cb8cc3df4fd737af80274a8e6"],["tags/Certificate/index.html","1d20dada0c85902c19646f0c358715e0"],["tags/Go/index.html","868780bf19ea97cc09a82ea39e695c68"],["tags/QUIC/index.html","92a93f54e136b4606f6c679b455d0357"],["tags/TCP协议/index.html","5651b259d864a1a787619eaf95217d6e"],["tags/design-pattern/index.html","2ef2d5f44400df5ab5246836f9068c0e"],["tags/devops/index.html","50aec968ec19a8c1fe32fb96db19d510"],["tags/docker/index.html","e6c890cf38dc62593c57e6108018a99e"],["tags/epoll/index.html","36af5b2633fd776c7930695131c7056d"],["tags/etcd/index.html","29c8e711b08706a406e8bfd937c83a98"],["tags/git/index.html","37607180e93d89a535322734c7e6e11c"],["tags/golang/index.html","5e300cb8c3de28addd19f1092436b351"],["tags/grpc/index.html","8b01430a75ec1b59421241736694e034"],["tags/index.html","6eae41e3c4e2619f9e4e97307d520a6e"],["tags/k8s/index.html","bf811d1f1c2821a5f04abcc433158ed8"],["tags/network/index.html","fa636de8effb7a0b5184c8a5c80905af"],["tags/nginx/index.html","3a957754bc0faacacebb24e015fc5b77"],["tags/ops/index.html","d601462bbf685802b3aaaa1a8c2e7028"],["tags/socket编程/index.html","cead2d560e034f801d37f97f45a1bdaa"],["tags/tls/index.html","e856f989c1e90a465f1de0fd0bc3ce87"],["tags/wireshark/index.html","ea521389542f4e91e86203635ce986c6"],["tags/协程/index.html","89dac0ef9348f38f194d456cfceafc94"],["tags/点播/index.html","c7ffded26faeafef442637b7320e5fd4"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function(originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function(originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function(originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function(whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function(originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







