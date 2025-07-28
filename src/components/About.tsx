export const About = () => {
  return (
    <section className="py-16 px-6">
      <div className="container mx-auto">
        <div className="glass-card rounded-3xl p-12">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div 
              className="w-full h-80 rounded-2xl flex items-center justify-center text-6xl border-2 border-muted"
              style={{ background: 'var(--gradient-about)' }}
            >
              🔬
            </div>
            
            <div className="text-foreground">
              <h2 className="text-4xl font-bold mb-6">About Me</h2>
              <p className="text-lg mb-6 opacity-90 text-muted-foreground">
                Currently pursuing my degree in Mechanical Engineering, I am deeply fascinated 
                by the world of materials science and sustainable design solutions.
              </p>
              <p className="text-lg mb-6 opacity-90 text-muted-foreground">
                My approach to learning is rooted in hands-on experimentation and problem-solving. 
                I believe in understanding not just the "what" but the "why" behind engineering principles.
              </p>
              <p className="text-lg opacity-90 text-muted-foreground">
                I'm particularly interested in how materials shape our everyday experiences and 
                how we can engineer better, more sustainable solutions for tomorrow's challenges.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};