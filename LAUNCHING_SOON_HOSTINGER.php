<?php
/**
 * Vnexora Luxury Estate - Launching Soon
 * Standalone Professional Landing Page for Hostinger
 */

$message_sent = false;
if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST['email'])) {
    $to = "connect@vnexora.com"; // Your contact email
    $subject = "Pre-Launch Inquiry: " . $_POST['email'];
    $body = "New inquiry from pre-launch page.\n\nEmail: " . $_POST['email'] . "\nMessage: " . ($_POST['message'] ?? 'N/A');
    $headers = "From: webmaster@vnexora.com";
    
    if (mail($to, $subject, $body, $headers)) {
        $message_sent = true;
    }
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Vnexora | Redefining Luxury Hospitality</title>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;700;900&family=Playfair+Display:ital,wght@0,400;0,700;1,400&display=swap" rel="stylesheet">
    <script src="https://cdn.tailwindcss.com"></script>
    <style>
        body { background-color: #050505; color: white; font-family: 'Inter', sans-serif; overflow: hidden; }
        .font-serif { font-family: 'Playfair Display', serif; }
        .text-mustard { color: #CFA052; }
        .bg-mustard { background-color: #CFA052; }
        .border-mustard { border-color: #CFA052; }
        
        .shimmer {
            background: linear-gradient(90deg, transparent, rgba(255,255,255,0.05), transparent);
            background-size: 200% 100%;
            animation: shimmer 5s infinite;
        }
        @keyframes shimmer { 0% { background-position: -200% 0; } 100% { background-position: 200% 0; } }
        
        .fade-in { animation: fadeIn 2s ease-out forwards; opacity: 0; }
        @keyframes fadeIn { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
        
        .bg-pattern {
            background-image: url('https://www.transparenttextures.com/patterns/black-linen.png');
            opacity: 0.1;
        }
    </style>
</head>
<body class="flex items-center justify-center min-h-screen relative">
    <div class="absolute inset-0 bg-pattern z-0 pointer-events-none"></div>
    <div class="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black/80 z-10 pointer-events-none"></div>

    <main class="container relative z-20 px-6 text-center max-w-4xl fade-in">
        <!-- IDENTITY -->
        <div class="mb-12">
            <h1 class="text-[10px] font-black tracking-[0.8em] text-mustard uppercase mb-4">Vnexora Luxury Estate</h1>
            <div class="w-16 h-[1px] bg-mustard/30 mx-auto"></div>
        </div>

        <!-- MAIN MESSAGE -->
        <h2 class="text-5xl md:text-8xl font-serif leading-[0.9] tracking-tighter mb-8">
            Redefining <span class="italic font-light text-mustard">Luxury.</span><br>
            Launching <span class="italic font-light opacity-40">Soon.</span>
        </h2>

        <p class="text-white/30 text-lg md:text-xl font-light tracking-wide max-w-xl mx-auto mb-16 italic">
            Strategic hospitality advisory and elite asset management for the world's most prestigious portfolios.
        </p>

        <!-- FORM -->
        <?php if ($message_sent): ?>
            <div class="bg-white/5 border border-mustard/20 p-8 rounded-2xl animate-pulse">
                <p class="text-mustard font-bold uppercase tracking-widest text-xs">Institutional Connect Established.</p>
                <p class="text-white/40 text-sm mt-2">You have been added to our private alpha network.</p>
            </div>
        <?php else: ?>
            <form action="" method="POST" class="relative max-w-md mx-auto group">
                <input 
                    type="email" 
                    name="email" 
                    placeholder="ENTER YOUR OFFICIAL EMAIL" 
                    required
                    class="w-full bg-white/5 border border-white/10 text-white placeholder:text-white/20 py-5 px-8 text-[10px] font-black tracking-[0.4em] outline-none focus:border-mustard transition-all shadow-2xl uppercase rounded-none"
                >
                <button type="submit" class="absolute right-6 top-1/2 -translate-y-1/2 text-mustard hover:text-white transition-colors">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                </button>
            </form>
            <p class="mt-6 text-[8px] font-bold tracking-[0.3em] text-white/20 uppercase">
                Private Alpha Access | Encryption Active
            </p>
        <?php endif; ?>

        <!-- FOOTER LINKS -->
        <div class="mt-32 flex justify-center gap-8 text-[10px] font-black tracking-[0.4em] text-white/20 uppercase">
            <span class="hover:text-mustard cursor-pointer transition-colors">Hospitality</span>
            <span class="hover:text-mustard cursor-pointer transition-colors">Brokerage</span>
            <span class="hover:text-mustard cursor-pointer transition-colors">Advisory</span>
        </div>
    </main>

    <!-- SHIMMER OVERLAY -->
    <div class="absolute inset-0 shimmer opacity-20 pointer-events-none z-30"></div>
</body>
</html>
