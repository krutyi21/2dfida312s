export function RedirectLoading() {
  return (
    <main className="loading-screen" aria-live="polite">
      <section className="loading-card" aria-label="Opening secure link">
        <h1>Sophia Lane</h1>
        <p>Opening secure link...</p>
        <span>Please wait while we prepare your redirect.</span>
        <div className="loading-dots" aria-hidden="true">
          <i />
          <i />
          <i />
        </div>
      </section>
    </main>
  );
}
