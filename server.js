<button class="btn" onclick="getFreeKey()">🔑 احصل على كود مجاني لمدة ساعة</button>
<p id="key-result" style="margin-top:10px; font-weight:bold;"></p>

<script>
  async function getFreeKey() {
    const result = document.getElementById("key-result");
    result.textContent = "⏳ جاري توليد الكود...";
    try {
      const res = await fetch("http://localhost:3000/generate-key", { method: "POST" });
      const data = await res.json();
      if (data.success) {
        result.textContent = "✅ كودك: " + data.key;
      } else {
        result.textContent = "❌ فشل التوليد.";
      }
    } catch (e) {
      result.textContent = "❌ حدث خطأ في الاتصال.";
    }
  }
</script>
