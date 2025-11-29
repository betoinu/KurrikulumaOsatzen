import os
from dotenv import load_dotenv

# .env fitxategia kargatu
load_dotenv()

# Datuak lortu
url = os.getenv('SUPABASE_URL')
key = os.getenv('SUPABASE_KEY')

print("=== DEBUG INFORMATZAIOLA ===")
print(f"URL: {url}")
print(f"URL luzeera: {len(url) if url else 0}")
print(f"KEY: {key}")
print(f"KEY luzeera: {len(key) if key else 0}")
print(f"URL https:// hasten da: {url.startswith('https://') if url else False}")

# Probatu konexioa
if url and key:
    try:
        from supabase import create_client
        print("\n=== SUPABASE KONEXIOA PROBATZEN ===")
        client = create_client(url, key)
        print("✅ SUPABASE KONEKTATUTA!")
    except Exception as e:
        print(f"❌ SUPABASE ERROREA: {e}")
else:
    print("❌ URL edo KEY falta dira!")