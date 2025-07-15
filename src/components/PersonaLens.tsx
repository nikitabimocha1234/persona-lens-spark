import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Brain, Target, MessageCircle, Users, Lightbulb, TrendingUp, Star, Tags, Activity } from "lucide-react";
import aiSalesperson from "@/assets/ai-salesperson.png";

const PersonaLens = () => {
  const [inputs, setInputs] = useState({
    linkedinUrl: "",
    callTranscript: "",
    customerName: "",
    iMochaContact: "",
    icp: "",
    contextualInfo: ""
  });

  const [results, setResults] = useState<any>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const icpOptions = [
    "CHRO",
    "L&D",
    "TA",
    "Recruiter", 
    "HRBP",
    "Internal Mobility/Talent Transformation Lead",
    "CEO/COO"
  ];

  const handleAnalyze = async () => {
    setIsAnalyzing(true);
    // Simulate AI analysis
    setTimeout(() => {
      setResults({
        persona: "CHRO - Chief Human Resources Officer",
        discType: "Dominance (D) - Direct, results-focused, assertive communication style",
        sentiment: "Positive - Optimistic about digital transformation initiatives",
        matchingModules: ["Skills Inventory", "Career Pathing", "Adaptive Screening"],
        valueMessage: "Transform your workforce with AI-powered skills assessment that maps talent to business outcomes, reducing time-to-hire by 40%.",
        suggestedCta: "Would you like to explore how our skills intelligence platform can accelerate your strategic workforce planning?",
        pitchTone: "Consultative - Focus on strategic value and long-term ROI",
        confidenceScore: 85,
        contextualTags: ["Reskilling", "Digital Transformation", "Strategic Planning"],
        promptTrace: "Input confidence: LinkedIn (30%) + Call Transcript (40%) + ICP (20%) + Context (10%)"
      });
      setIsAnalyzing(false);
    }, 2000);
  };

  const ResultTile = ({ icon: Icon, title, content, explainer, confidence }: any) => (
    <Card className="h-full transition-all duration-300 hover:shadow-lg hover:shadow-primary/20">
      <CardHeader className="pb-3">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-primary/10 rounded-lg">
            <Icon className="w-5 h-5 text-primary" />
          </div>
          <div>
            <CardTitle className="text-lg">{title}</CardTitle>
            <CardDescription className="text-sm text-muted-foreground">
              {explainer}
            </CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          <p className="text-sm leading-relaxed">{content}</p>
          {confidence && (
            <div className="flex items-center gap-2">
              <Badge variant="secondary" className="text-xs">
                {confidence}% confidence
              </Badge>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary via-primary-dark to-primary-dark">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            PersonaLens 2.1
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            AI-Powered Persona Intelligence for Strategic Sales Enablement
          </p>
        </div>

        {/* Input Section */}
        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          {/* AI Salesperson Image */}
          <div className="flex justify-center lg:justify-start">
            <Card className="w-full max-w-md">
              <CardHeader>
                <CardTitle className="text-center">AI Sales Intelligence</CardTitle>
                <CardDescription className="text-center">
                  Your intelligent sales companion equipped with persona intelligence
                </CardDescription>
              </CardHeader>
              <CardContent className="flex justify-center">
                <img 
                  src={aiSalesperson} 
                  alt="AI Salesperson" 
                  className="w-64 h-64 object-cover rounded-lg shadow-lg"
                />
              </CardContent>
            </Card>
          </div>

          {/* Input Form */}
          <Card className="w-full">
            <CardHeader>
              <CardTitle>Input Information</CardTitle>
              <CardDescription>
                Provide prospect information for AI-powered persona analysis
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* LinkedIn Profile URL */}
              <div>
                <Label htmlFor="linkedin">LinkedIn Profile URL</Label>
                <Input
                  id="linkedin"
                  placeholder="https://linkedin.com/in/prospect-name"
                  value={inputs.linkedinUrl}
                  onChange={(e) => setInputs({...inputs, linkedinUrl: e.target.value})}
                />
              </div>

              {/* Call Transcript */}
              <div>
                <Label htmlFor="transcript">Call Transcript</Label>
                <Textarea
                  id="transcript"
                  placeholder="Enter call transcript here..."
                  rows={4}
                  value={inputs.callTranscript}
                  onChange={(e) => setInputs({...inputs, callTranscript: e.target.value})}
                />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-3">
                  <div>
                    <Label htmlFor="customer">Customer Name</Label>
                    <Input
                      id="customer"
                      placeholder="Customer from call"
                      value={inputs.customerName}
                      onChange={(e) => setInputs({...inputs, customerName: e.target.value})}
                    />
                  </div>
                  <div>
                    <Label htmlFor="imocha">iMocha Contact</Label>
                    <Input
                      id="imocha"
                      placeholder="iMocha representative"
                      value={inputs.iMochaContact}
                      onChange={(e) => setInputs({...inputs, iMochaContact: e.target.value})}
                    />
                  </div>
                </div>
              </div>

              {/* ICP Dropdown */}
              <div>
                <Label htmlFor="icp">Ideal Customer Profile (ICP)</Label>
                <Select onValueChange={(value) => setInputs({...inputs, icp: value})}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select ICP category" />
                  </SelectTrigger>
                  <SelectContent>
                    {icpOptions.map((option) => (
                      <SelectItem key={option} value={option}>
                        {option}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Contextual Information */}
              <div>
                <Label htmlFor="context">Contextual Information</Label>
                <Textarea
                  id="context"
                  placeholder="Any additional context or reference information..."
                  rows={3}
                  value={inputs.contextualInfo}
                  onChange={(e) => setInputs({...inputs, contextualInfo: e.target.value})}
                />
              </div>

              <Button 
                onClick={handleAnalyze}
                disabled={isAnalyzing}
                className="w-full bg-accent-orange hover:bg-accent-orange/90 text-white"
              >
                {isAnalyzing ? "Analyzing..." : "Analyze Persona"}
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Results Section */}
        {results && (
          <div className="space-y-6">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-white mb-2">Analysis Results</h2>
              <p className="text-white/80">AI-powered insights for strategic sales enablement</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <ResultTile
                icon={Users}
                title="Persona"
                content={results.persona}
                explainer="Helps tailor the message based on strategic responsibilities"
                confidence={null}
              />

              <ResultTile
                icon={Brain}
                title="DISC Personality Type"
                content={results.discType}
                explainer="Informs message tone, pitch timing, and CTA format"
                confidence={null}
              />

              <ResultTile
                icon={Activity}
                title="Sentiment"
                content={results.sentiment}
                explainer="Helps in prioritizing deal stage and objection handling"
                confidence={null}
              />

              <ResultTile
                icon={Target}
                title="Matching iMocha Modules"
                content={results.matchingModules.join(", ")}
                explainer="Connects prospect pain points to platform capabilities"
                confidence={null}
              />

              <ResultTile
                icon={MessageCircle}
                title="Personalized Value Message"
                content={results.valueMessage}
                explainer="Sales enablement content for emails, calls, or decks"
                confidence={null}
              />

              <ResultTile
                icon={TrendingUp}
                title="Suggested CTA"
                content={results.suggestedCta}
                explainer="Moves the conversation forward strategically"
                confidence={null}
              />

              <ResultTile
                icon={Lightbulb}
                title="Recommended Pitch Tone"
                content={results.pitchTone}
                explainer="Helps reps frame messaging that lands well"
                confidence={null}
              />

              <ResultTile
                icon={Star}
                title="Weighted Confidence Score"
                content="Output confidence based on input variety"
                explainer="Signals if the response is trustworthy or requires human review"
                confidence={results.confidenceScore}
              />

              <ResultTile
                icon={Tags}
                title="Contextual Tags"
                content={results.contextualTags.join(", ")}
                explainer="Used to cluster prospects or trigger playbooks"
                confidence={null}
              />

              <div className="lg:col-span-3">
                <ResultTile
                  icon={Brain}
                  title="Prompt Trace"
                  content={results.promptTrace}
                  explainer="Internal logic trace for QA/debugging - improves model transparency and tuning"
                  confidence={null}
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PersonaLens;