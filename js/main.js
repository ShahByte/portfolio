document.getElementById("year").textContent = new Date().getFullYear();

const header = document.getElementById("site-header");
const menuToggle = document.getElementById("menu-toggle");
const mainNav = document.getElementById("main-nav");

window.addEventListener("scroll", () => {
  header.classList.toggle("scrolled", window.scrollY > 30);
}, { passive: true });

menuToggle.addEventListener("click", () => {
  const open = mainNav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(open));
});

mainNav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    mainNav.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});

const publications = [
  {
    title: "MSInet: A Self-Supervised CNN Framework Integrating Global and Local Context for Robust Mass Spectrometry Imaging Segmentation",
    authors: "Mudassir Shah, Siyang Liu, Lei Guo, Zhang Yusong, Xiangnan Xu, Fei Zhaodong, Jingjing Xu, Jiyang Dong",
    journal: "Analytical Chemistry",
    date: "2025 · 97 (44), 24697–24705",
    doi: "10.1021/acs.analchem.5c04885",
    firstAuthor: true
  },
  {
    title: "SagMSI: A Graph Convolutional Network framework for Precise Spatial Segmentation in Mass Spectrometry Imaging",
    authors: "Mudassir Shah, Linlin Wang, Lei Guo, Chengyi Xie, Thomas Ka-Yam Lam, Lingli Deng, Xiangnan Xu, Jingjing Xu, Jiyang Dong, Zongwei Cai",
    journal: "Analytica Chimica Acta",
    date: "2025 · 1358, 344098",
    doi: "10.1016/j.aca.2025.344098",
    firstAuthor: true
  },
  {
    title: "eLIMS: Ensemble Learning-Based Spatial Segmentation of Mass Spectrometry Imaging to Explore Metabolic Heterogeneity",
    authors: "Mudassir Shah, Lei Guo, Xiangnan Xu, Lingli Deng, Keyi Lu, Jiyang Dong, Chao Zhao, Jingjing Xu",
    journal: "Journal of Proteome Research",
    date: "2024 · 23 (8), 3088–3095",
    doi: "10.1021/acs.jproteome.3c00764",
    firstAuthor: true
  },
  {
    title: "Multimodal Image Fusion Offers Better Spatial Resolution for Mass Spectrometry Imaging",
    authors: "Lei Guo, Jinyu Zhu, Keqi Wang, Kian-Kai Cheng, Jingjing Xu, Liheng Dong, Xiangnan Xu, Can Chen, Mudassir Shah, Zhangxiao Peng, Jianing Wang, Zongwei Cai, Jiyang Dong",
    journal: "Analytical Chemistry",
    date: "2023 · 95 (25), 9714–9721",
    doi: "10.1021/acs.analchem.3c02002",
    firstAuthor: false
  },
  {
    title: "iSegMSI: An Interactive Strategy to Improve Spatial Segmentation of Mass Spectrometry Imaging Data",
    authors: "Lei Guo, Xingxing Liu, Chao Zhao, Zhenxing Hu, Xiangnan Xu, Kian-Kai Cheng, Peng Zhou, Yu Xiao, Mudassir Shah, Jingjing Xu, Jiyang Dong, Zongwei Cai",
    journal: "Analytical Chemistry",
    date: "2022 · 94 (42), 14522–14529",
    doi: "10.1021/acs.analchem.2c01456",
    firstAuthor: false
  },
  {
    title: "prepIMS: a Robust Data Preprocessing Workflow for Ion Mobility Mass Spectrometry Imaging",
    authors: "Linlin Wang, Chengyi Xie, Thomas Ka Yam Lam, Chris Kong Chu Wong, Mudassir Shah, Xiangnan Xu, Jianing Wang, Jingjing Xu, Jiyang Dong, Zongwei Cai",
    journal: "Analytica Chimica Acta",
    date: "2025 · 1384, 344951",
    doi: "10.1016/j.aca.2025.344951",
    firstAuthor: false
  },
  {
    title: "IregMSI: Deep Learning Assisted Automatic Multimodal Registration of Mass Spectrometry Imaging",
    authors: "Mudassir Shah, Yong Wei, Jonathan Li, Jingjing Xu, Wang Liu",
    journal: "Analytical Chemistry",
    date: "2026",
    status: "Under review",
    firstAuthor: true
  },
  {
    title: "Self-Supervised Spatial Denoising for Mass Spectrometry Imaging Enhances Metabolite Identification and Image–Omics Integration",
    authors: "Mudassir Shah, Yu Ling, Zaib Khan, Wei Chen, Wang Liu",
    journal: "Briefings in Bioinformatics",
    date: "2026",
    status: "In preparation",
    firstAuthor: true
  }
];

const publicationList = document.getElementById("publication-list");
publicationList.innerHTML = publications.map((paper) => `
  <article class="publication">
    <p class="eyebrow">${paper.journal}</p>
    <h3>${paper.title}</h3>
    <p class="authors">${paper.authors}</p>
    <div class="pub-meta"><span>${paper.date}</span>${paper.firstAuthor ? "<span>First author</span>" : "<span>Co-author</span>"}</div>
    ${paper.doi ? `<a class="doi-link" href="https://doi.org/${paper.doi}" target="_blank" rel="noopener">DOI: ${paper.doi} ↗</a>` : `<span class="status">${paper.status}</span>`}
  </article>
`).join("");

document.getElementById("contact-form").addEventListener("submit", (event) => {
  event.preventDefault();
  const data = new FormData(event.currentTarget);
  const subject = encodeURIComponent(`${data.get("inquiry")} — portfolio contact`);
  const body = encodeURIComponent(
    `Name: ${data.get("name")}\nEmail: ${data.get("email")}\n\n${data.get("message")}`
  );
  window.location.href = `mailto:shahmudassir4@outlook.com?subject=${subject}&body=${body}`;
  document.getElementById("form-note").textContent = "Opening your email application…";
});