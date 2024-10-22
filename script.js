document.getElementById("saveContact").addEventListener("click", function () {
    const vCardData = `
    BEGIN:VCARD
    VERSION:3.0
    FN:Supriya Tiwari
    ORG:Zen Health Solutions;
    TITLE:CEO & Director
    TEL:+91 8527437707
    EMAIL:supriyatiwari@zenhealthsolutions.com
    URL:www.zenhealthsolutions.com
    END:VCARD
    `;
    
    const blob = new Blob([vCardData], { type: "text/vcard" });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "Supriya_Tiwari_Contact.vcf";
    link.click();
    window.URL.revokeObjectURL(url);
});
