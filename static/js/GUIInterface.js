function addIdeaNode(parNodeId, title, contain, creatorId) {
	//向思维导图中添加一个节点
    var parNode = findNode(rootNode, parNodeId);
    var childNode = new Node(title, contain, creatorId);
    parNode.insertNode(childNode);
    addNews("[+]"+creatorId+"添加了IDEA: <strong>"+title+"</strong>");
}

function removeIdeaNode(nodeId) {
    //在思维导图中删除一个节点
    var node = findNode(rootNode,nodeId);
    node.removeNode();
    addNews("[-]IDEA: <strong>"+title+"</strong>被删除");
}

function voteIdea(nodeId,supporterNum){
    //点赞或取消点赞
    var supNum = document.querySelector("#"+nodeId+"-sup-num");
    supNum.innerHTML = supporterNum;
}

function addMember(id,type){
    //成员列表添加成员，0为管理员，1为用户
    var li = document.createElement("li");
    li.classList.add("contributor");
    if(type === 0) //管理员类型的用户
        li.classList.add("admin");
    if(id === userName) //为当页用户
        li.classList.add("me");

    li.innerHTML = "<i class=\"fa fa-user-circle\"></i> " + id;
    var ul = document.getElementById("contributor-container").getElementsByTagName("ul")[0];
    ul.appendChild(li);
}

function addNotice(notice){
    //发布公告
    var noticeDiv = document.querySelector("#topic-intro");
    noticeDiv.innerHTML = "<strong>[ 房间号"+roomId+" ] :</strong> " + notice;
}

function addNews(news){
	//动态栏添加动态
    var time = new Date();
    var hour = time.getHours();
    var minute = time.getMinutes();
    var ul = document.getElementById("news-container").getElementsByTagName("ul")[0];
    var li = document.createElement("li");
    li.innerHTML = "["+hour+":"+minute+"] " + news;
    ul.appendChild(li);
}